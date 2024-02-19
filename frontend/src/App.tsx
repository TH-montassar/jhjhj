import { useEffect } from "react";
import Routers from "./Routers/Routers";
import { authCheck, logout } from "./redux/action/auth.action";
import { store } from "./redux/store";
import { setAuthToken } from "./utils/setAuthToken";

export default function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    // @ts-ignore
    store.dispatch(authCheck());

    window.addEventListener("storage", () => {
      // @ts-ignore
      if (!localStorage.token) store.dispatch(logout());
    });
  }, []);
  return (
    <>
      <Routers />
    </>
  );
}
