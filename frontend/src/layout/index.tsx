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
        <div className="flex-[6]">
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
};
