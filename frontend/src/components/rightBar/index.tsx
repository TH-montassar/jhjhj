export const RightBar = () => {
  return (
    <div
      id="RightBar"
      className="flex-[3] sticky top-16 h-[calc(100vh-64px)] overflow-scroll scrollbar-hide"
    >
      <div className="container p-5">
        <div className="item">
          <span className=" text-gray-500">Suggestion for you</span>
          <div className="user flex items-center justify-between">
            <div className="userInfo flex items-center">
              <img
                className=" w-12 h-12 rounded-[50%] object-cover"
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Profile"
              />
              <span>userName</span>
            </div>

            <div className="buttons  flex items-center">
              <button type="button">dismiss</button>
              <button type="button">follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
