import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
export const NavBar = () => {
  interface User {
    firstName: string;
    lastName: string;
  }

  const { user, message, pending, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const currentUser = user as User;
  return (
    <div className="navbar flex justify-between px-5 py-3 h-12 border-b border-solid border-gray-300 sticky top-0 bg-white">
      <div className="left flex items-center gap-8" id="">
        <Link to={`/`} className="">
          <span className=" font-bold text-sm	text-indigo-700	">MontaSocial</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search flex  items-center gap-5 border border-gray-300 p-1 rounded-md	">
          <SearchOutlinedIcon />
          <input
            className=" w-[32rem]"
            type="text"
            name=""
            id=""
            placeholder="search....."
          />
        </div>
      </div>
      <div className="right flex items-center gap-5" id="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="use flex items-center gap-3 font-medium	">
          <img
            className=" w-8 h-8 rounded-[50%] object-cover"
            src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile"
          />
          <span>
            {currentUser.firstName} {currentUser.lastName}
          </span>
        </div>
      </div>
    </div>
  );
};
