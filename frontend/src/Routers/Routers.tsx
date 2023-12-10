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

const Routers = () => {
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
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default Routers;
