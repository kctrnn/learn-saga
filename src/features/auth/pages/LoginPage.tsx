import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();

  useEffect(() => {
    const onLoggedIn = () => {
      const isLoggedIn = Boolean(localStorage.getItem("access_token"));
      if (isLoggedIn) {
        history.push("/admin");
      }
    };

    onLoggedIn();
  }, [history]);

  return <div className='login-page'>Login page</div>;
}

export default LoginPage;
