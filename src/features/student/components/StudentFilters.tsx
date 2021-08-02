import {
  Box,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { City, ListParams } from "models";
import { ChangeEvent } from "react";

export interface StudentFiltersProps {
  onChange?: (newFilter: Partial<ListParams>) => void;
  onSearchChange?: (newFilter: Partial<ListParams>) => void;

  filter: Partial<ListParams>;
  cityList: City[];
}

function StudentFilters({
  filter,
  onChange,
  onSearchChange,
  cityList,
}: StudentFiltersProps) {
  const handleSearchByNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newFilter = {
      ...filter,
      name_like: event.target.value,
      _page: 1,
    };

    if (onSearchChange) {
      onSearchChange(newFilter);
    }
  };

  const handleFilterByCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newFilter = {
      ...filter,
      city: event.target.value || undefined,
      _page: 1,
    };

    if (onChange) {
      onChange(newFilter);
    }
  };

  return (
    <Box mb={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            id='searchByName'
            label='Search by name'
            variant='outlined'
            fullWidth
            size='small'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={handleSearchByNameChange}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <TextField
            id='filterByCity'
            select
            label='Filter by city'
            value={filter.city || ""}
            variant='outlined'
            fullWidth
            size='small'
            onChange={handleFilterByCityChange}
          >
            <MenuItem value=''>
              <em>All</em>
            </MenuItem>

            {cityList.map((city) => (
              <MenuItem key={city.code} value={city.code}>
                {city.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StudentFilters;
