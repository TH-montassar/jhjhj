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
export const LeftBar = () => {
  interface User {
    firstName: string;
    lastName: string;
  }

  const { user } = useSelector((state: RootState) => state.auth);
  const currentUser = user as User;

  return (
    <div id="leftBar" className=" p-5">
      <div id="container">
        <menu className="flex flex-col gap-2">
          <div id="user" className="flex items-center gap-3">
            <img
              className=" w-12 h-12 rounded-[50%] object-cover"
              src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Profile"
            />
            <span>
              {currentUser.firstName} {currentUser.lastName}
            </span>
          </div>
          <div className="item flex items-center gap-2">
            <img src={Friends} alt="Friends" />
            <span>Friends</span>
          </div>
          <div className="item flex items-center gap-2">
            <img src={Groups} alt="Groups" />
            <span>Groups</span>
          </div>
          <div className="item flex items-center gap-2">
            <img src={Marketplace} alt="Marketplace" />
            <span>Marketplace</span>
          </div>
          <div className="item flex items-center gap-2">
            <img src={Watch} alt="Watch" />
            <span>Watch</span>
          </div>
          <div className="item flex items-center gap-2">
            <img src={Memories} alt="Memories" />
            <span>Memories</span>
          </div>
        </menu>
        <hr className="my-4 border-none h-px bg-gray-300" />
        <menu className="">
          <span> Your Shortcut</span>
          <div className="item flex items-center gap-2">
            <img src={Messages} alt="Messages" />
            <span>Messages</span>
          </div>

          <div className="item flex items-center gap-2">
            <img src={Events} alt="Events" />
            <span>Events</span>
          </div>
          <div className="item flex items-center gap-2">
            <img src={Gaming} alt="Gaming" />
            <span>Gaming</span>
          </div>

          <div className="item flex items-center gap-2">
            <img src={Gallery} alt="Gallery" />
            <span>Gallery</span>
          </div>
          <div className="item flex items-center gap-2">
            <img src={Videos} alt="Videos" />
            <span>Videos</span>
          </div>
        </menu>

        <hr className="my-4 border-none h-px bg-gray-300" />
        <menu className="">
          <span> Others</span>
          <div className="item flex items-center gap-2">
            <img src={Foundraiser} alt="Foundraiser" />
            <span>Foundraiser</span>
          </div>

          <div className="item flex items-center gap-2">
            <img src={Tutorials} alt="Tutorials" />
            <span>Tutorials</span>
          </div>
          <div className="item flex items-center gap-2">
            <img src={Coures} alt="Coures" />
            <span>Coures</span>
          </div>
        </menu>
      </div>
    </div>
  );
};
