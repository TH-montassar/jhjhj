import Lera from "../../assets/lera.jpg";
export const RightBar = () => {
  //! to be Draft
  const usersData = [
    {
      userName: "lera",
      image: Lera,
      event: "open messanger",
      time: "2 minute ago",
    },
    {
      userName: "Montassar",
      image:
        "https://images.pexels.com/photos/20216491/pexels-photo-20216491/free-photo-of-a-man-in-a-hat-and-sweater-holding-a-camera.jpeg",
      event: "update  img",
      time: "1 minute ago",
    },
  ];
  return (
    <div
      id="RightBar"
      className="flex-[3] sticky top-16 h-[calc(100vh-64px)] overflow-scroll scrollbar-hide"
    >
      <div className="container p-5">
        <div className="item shadow-md p-5 mb-5">
          <span className=" text-gray-500">Suggestion for you</span>
          <div>
            {usersData.map((userData, index) => (
              <div
                key={index}
                className="user flex items-center justify-between my-5"
              >
                <div className="userInfo flex items-center gap-4">
                  <img
                    className=" w-12 h-12 rounded-[50%] object-cover"
                    src={userData.image}
                    alt="Profile"
                  />
                  <span className="font-medium text-black">
                    {userData.userName}
                  </span>
                </div>
                <div className="buttons  flex items-center gap-3">
                  <button
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    type="button"
                  >
                    follow
                  </button>
                  <button
                    className=" bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-2 border-b-4 border-red-700 hover:border-red-500 rounded"
                    type="button"
                  >
                    dismiss
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="item shadow-md p-5  mb-5">
          <span className=" text-gray-500"> Latest activities</span>
          <div>
            {usersData.map((userData, index) => (
              <div
                key={index}
                className="user flex items-center justify-between my-5"
              >
                <div className="userInfo flex items-center gap-4">
                  <img
                    className=" w-12 h-12 rounded-[50%] object-cover"
                    src={userData.image}
                    alt="Profile"
                  />

                  <span className="font-medium text-black">
                    {userData.userName}
                  </span>

                  <p className="event text-gray-500"> {userData.event}</p>
                </div>

                <p className="text-gray-500">{userData.time}</p>
              </div>
            ))}
          </div>

          <div>
            {usersData.map((userData, index) => (
              <div
                key={index}
                className="user flex items-center justify-between my-5"
              >
                <div className="userInfo flex items-center gap-4">
                  <img
                    className=" w-12 h-12 rounded-[50%] object-cover"
                    src={userData.image}
                    alt="Profile"
                  />

                  <span className="font-medium text-black">
                    {userData.userName}
                  </span>

                  <p className="event text-gray-500"> {userData.event}</p>
                </div>

                <p className="text-gray-500">{userData.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="item shadow-md p-5  mb-5">
          <span className=" text-gray-500"> Online Friends</span>
          <div>
            {usersData.map((userData, index) => (
              <div
                key={index}
                className="user flex items-center justify-between my-5"
              >
                <div className="userInfo flex items-center gap-4 relative">
                  <img
                    className=" w-12 h-12 rounded-[50%] object-cover"
                    src={userData.image}
                    alt="Profile"
                  />
                  <div className="online bg-green-500 w-3 h-3 rounded-full absolute top-0 left-9" />
                  <span className="font-medium text-black">
                    {userData.userName}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div>
            {usersData.map((userData, index) => (
              <div
                key={index}
                className="user flex items-center justify-between my-5"
              >
                <div className="userInfo flex items-center gap-4 relative">
                  <img
                    className=" w-12 h-12 rounded-[50%] object-cover"
                    src={userData.image}
                    alt="Profile"
                  />
                  <div className="online bg-green-500 w-3 h-3 rounded-full absolute top-0 left-9" />
                  <span className="font-medium text-black">
                    {userData.userName}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div>
            {usersData.map((userData, index) => (
              <div
                key={index}
                className="user flex items-center justify-between my-5"
              >
                <div className="userInfo flex items-center gap-4 relative">
                  <img
                    className=" w-12 h-12 rounded-[50%] object-cover"
                    src={userData.image}
                    alt="Profile"
                  />
                  <div className="online bg-green-500 w-3 h-3 rounded-full absolute top-0 left-9" />
                  <span className="font-medium text-black">
                    {userData.userName}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div>
            {usersData.map((userData, index) => (
              <div
                key={index}
                className="user flex items-center justify-between my-5"
              >
                <div className="userInfo flex items-center gap-4 relative">
                  <img
                    className=" w-12 h-12 rounded-[50%] object-cover"
                    src={userData.image}
                    alt="Profile"
                  />
                  <div className="online bg-green-500 w-3 h-3 rounded-full absolute top-0 left-9" />
                  <span className="font-medium text-black">
                    {userData.userName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
