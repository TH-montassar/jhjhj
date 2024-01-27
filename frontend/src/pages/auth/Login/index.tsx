import { Link } from "react-router-dom";
import "./index.css";

import { useState, useEffect, FC, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { RootState } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import { login } from "../../../redux/action/auth.action";
import { Loader } from "../../../Shared/Loader";
export const Login = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  //initialize inputs empty
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, pending, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password) {
      setIsEmpty(true);
      // Reset the isEmpty state to false after 1 second
      setTimeout(() => {
        setIsEmpty(false);
      }, 3000);
      return;
    }
    try {
      setIsEmpty(false);
      // @ts-ignore
      await dispatch(login(inputs));
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };
  if (isAuthenticated) {
    navigate("/");
  }
  return (
    <div>
      {pending && (
        <div>
          <Loader />
        </div>
      )}
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
            <form onSubmit={formSubmitHandler} className=" flex flex-col gap-8">
              <input
                className=" border-b-2 solid  py-5 px-3"
                type="text"
                value={inputs.email}
                onChange={handleChange}
                name="email"
                placeholder="email"
              />
              <input
                className="border-b-2  solid  py-5 px-3"
                value={inputs.password}
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Password"
              />
              <button
                type="submit"
                className="w-1/2 p-3 border-none bg-[#938eef] text-white cursor-pointer "
              >
                Login
              </button>
            </form>
            {isEmpty && (
              <div className="mt-5 text-red-600 mx-auto">is empty</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
