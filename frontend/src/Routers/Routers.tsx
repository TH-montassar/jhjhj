import {
  Routes,
  Route,
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";

const Routers = () => {
  const routes = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/Register", element: <Register /> },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default Routers;
