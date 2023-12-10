import { Link } from "react-router-dom";
import "./index.css";
export const Login = () => {
  return (
    <div>
      <div className="h-screen bg-my_purple flex items-center justify-center">
        <div className="flex  bg-white w-1/2 overflow-hidden rounded-xl  min-h-[37.5rem]">
          <div className="bg flex-1 !bg-cover !bg-center  p-14 flex flex-col gap-8 text-white">
            <h1 className="text-8xl font-bold leading-[6.3rem]">Hello world</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos excepturi ex dolorum alias? Ipsa beatae a dolorum
              facere vitae officia! Commodi, cumque adipisci.
            </p>
            <span className=" text-sm">Don't you have an account</span>{" "}
            <Link to={`/Register`}>
              <button className=" w-1/2 bg-white  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Register
              </button>
            </Link>
          </div>
          <div className="flex-1  p-14 flex flex-col gap-14 justify-center">
            <h1 className="text-5xl text-gray-500">Login</h1>
            <form className=" flex flex-col gap-8">
              <input
                className=" border-b-2 solid  py-5 px-3"
                type="text"
                placeholder="Username"
              />
              <input
                className="border-b-2  solid  py-5 px-3"
                type="password"
                placeholder="Password"
              />
              <button className="w-1/2 p-3 border-none bg-[#938eef] text-white cursor-pointer ">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
