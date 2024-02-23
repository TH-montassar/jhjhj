import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Friends from "../../assets/friend.png";
import Coures from "../../assets/coures.png";
import Events from "../../assets/events.png";
import Foundraiser from "../../assets/foundraiser.png";
import Gallery from "../../assets/gallery.png";
import Gaming from "../../assets/gaming.png";
import Groups from "../../assets/groups.png";
import Img from "../../assets/img.png";
import Map from "../../assets/img.png";
import Marketplace from "../../assets/marketplace.png";
import Memories from "../../assets/memories.png";
import Messages from "../../assets/messages.png";
import Tutorials from "../../assets/tutorials.png";
import Videos from "../../assets/videos.png";
import Watch from "../../assets/watch.png";
import "./index.css";
export const LeftBar = () => {
  interface User {
    firstName: string;
    lastName: string;
  }

  const { user } = useSelector((state: RootState) => state.auth);
  const currentUser = user as User;

  return (
    <div
      id="leftBar"
      className="flex-[2] sticky top-16 h-[calc(100vh-64px)] overflow-scroll scrollbar-hide"
    >
      <div id="container" className="p-5">
        <menu className="flex flex-col gap-2">
          <div id="user" className="flex items-center gap-3">
            <img
              className=" w-12 h-12 rounded-[50%] object-cover"
              src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Profile"
            />
            <span className="text-sm">
              {currentUser.firstName} {currentUser.lastName}
            </span>
          </div>
          <div className="item flex items-center gap-2">
            <img src={Friends} alt="Friends" />
            <span className="text-sm">Friends</span>
          </div>
          <div className="item flex items-center gap-2">
            <img src={Groups} alt="Groups" />
            <span className="text-sm">Groups</span>
          </div>
          <div className="item flex items-center gap-2">
            <img src={Marketplace} alt="Marketplace" />
            <span className="text-sm">Marketplace</span>
          </div>
          <div className="item flex items-center gap-2">
            <img src={Watch} alt="Watch" />
            <span className="text-sm">Watch</span>
          </div>
          <div className="item flex items-center gap-2">
            <img src={Memories} alt="Memories" />
            <span className="text-sm">Memories</span>
          </div>
        </menu>
        <hr className="my-4 border-none h-px bg-gray-300" />
        <menu className="">
          <span className="text-xs "> Your Shortcut</span>
          <div className="item flex items-center gap-2">
            <img src={Messages} alt="Messages" />
            <span className="text-sm">Messages</span>
          </div>

          <div className="item flex items-center gap-2">
            <img src={Events} alt="Events" />
            <span className="text-sm">Events</span>
          </div>
          <div className="item flex items-center gap-2">
            <img src={Gaming} alt="Gaming" />
            <span className="text-sm">Gaming</span>
          </div>

          <div className="item flex items-center gap-2">
            <img src={Gallery} alt="Gallery" />
            <span className="text-sm">Gallery</span>
          </div>
          <div className="item flex items-center gap-2">
            <img src={Videos} alt="Videos" />
            <span className="text-sm">Videos</span>
          </div>
        </menu>

        <hr className="my-4 border-none h-px bg-gray-300" />
        <menu className="">
          <span className="text-xs "> Others</span>
          <div className="item flex items-center gap-2">
            <img src={Foundraiser} alt="Foundraiser" />
            <span className="text-sm">Foundraiser</span>
          </div>

          <div className="item flex items-center gap-2">
            <img src={Tutorials} alt="Tutorials" />
            <span className="text-sm">Tutorials</span>
          </div>
          <div className="item flex items-center gap-2">
            <img src={Coures} alt="Coures" />
            <span className="text-sm">Coures</span>
          </div>
        </menu>
      </div>
    </div>
  );
};
