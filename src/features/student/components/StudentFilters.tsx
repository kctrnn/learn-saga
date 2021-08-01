import { Box, Grid, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { ListParams } from "models";
import { ChangeEvent } from "react";

export interface StudentFiltersProps {
  onChange?: (newFilter: Partial<ListParams>) => void;
  onSearchChange?: (newFilter: Partial<ListParams>) => void;

  filter: Partial<ListParams>;
}

function StudentFilters({
  filter,
  onChange,
  onSearchChange,
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

  return (
    <Box mb={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
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
      </Grid>
    </Box>
  );
}

export default StudentFilters;
