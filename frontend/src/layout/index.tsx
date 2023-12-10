import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navBar";
import { LeftBar } from "../components/leftBar";
import { RightBar } from "../components/rightBar";

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <LeftBar />
        <Outlet />
        <RightBar />
      </div>
    </div>
  );
};
