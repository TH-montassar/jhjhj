import {
  createBrowserRouter as BRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { Home } from "../pages/home";
import { Profile } from "../pages/profile";
import { ProtectedRoute } from "../guards/PrivateRoutes";
import { Layout } from "../layout";
import { setAuthToken } from "../utils/setAuthToken";
import { authCheck, logout } from "../redux/action/auth.action";
import { useEffect } from "react";
import { store } from "../redux/store";
import { Notfound } from "../components/notFound";

const Routers = () => {
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
  const routes = BRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/profile/:id", element: <Profile /> },
      ],
    },

    { path: "/login", element: <Login /> },
    { path: "/Register", element: <Register /> },
    { path: "/*", element: <Notfound /> },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default Routers;
