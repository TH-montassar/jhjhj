import { Link } from "react-router-dom";
import "./index.css";
export const Register = () => {
  return (
    <div>
      <div className="h-screen bg-my_purple flex   items-center justify-center">
        <div className="flex flex-row-reverse bg-white w-1/2 overflow-hidden rounded-xl  min-h-[37.5rem]">
          <div className="bg flex-1 !bg-cover !bg-center  p-14 flex flex-col gap-8 text-white">
            <h1 className="text-8xl font-bold leading-[6.3rem]">
              Monta Social
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos excepturi ex dolorum alias? Ipsa beatae a dolorum
              facere vitae officia! Commodi, cumque adipisci.
            </p>
            <span className=" text-sm">Do you have an account ?</span>
            <Link to={`/Login`}>
              <button className=" w-1/2 bg-white  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Login
              </button>
            </Link>
          </div>
          <div className="flex-1  p-14 flex flex-col gap-14 justify-center">
            <h1 className="text-5xl text-gray-500">Register</h1>
            <form className=" flex flex-col gap-8">
              <input
                className=" border-b-2 solid  py-5 px-3"
                type="text"
                placeholder="Username"
              />
              <input
                className="border-b-2  solid  py-5 px-3"
                type="text"
                placeholder="lastName"
              />
              <input
                className="border-b-2  solid  py-5 px-3"
                type="email"
                placeholder="exemple@gmail.com"
              />

              <input
                className="border-b-2  solid  py-5 px-3"
                type="password"
                placeholder="Password"
              />

              <button className="w-1/2 p-3 border-none bg-[#938eef] text-white cursor-pointer ">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
