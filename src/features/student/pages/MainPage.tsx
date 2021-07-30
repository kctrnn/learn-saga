import { useAppDispatch } from "app/hooks";
import { useEffect } from "react";
import { fetchStudentList } from "../studentSlice";

function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const action = fetchStudentList({ _page: 1, _limit: 5 });
    dispatch(action);
  }, [dispatch]);

  return <div>Main Page</div>;
}

export default MainPage;
