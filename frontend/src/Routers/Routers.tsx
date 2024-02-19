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
import { Notfound } from "../components/notFound";

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
      errorElement: <Notfound />,
    },

    { path: "/login", element: <Login />, errorElement: <Notfound /> },
    { path: "/Register", element: <Register />, errorElement: <Notfound /> },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default Routers;
