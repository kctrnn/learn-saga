import { Button } from "@material-ui/core";
import { useAppDispatch } from "app/hooks";
import { logout } from "features/auth/authSlice";

export interface AdminLayoutProps {}

export const AdminLayout = (props: AdminLayoutProps) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      AdminLayout &nbsp;
      <Button
        variant='contained'
        color='secondary'
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </div>
  );
};
