import { Link } from "react-router-dom";
import "./index.css";
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect, FC, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
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

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const formValidation = () => {
    let localErrors = {
      email: "",
      password: "",
    };

    if (inputs.email == "") {
      localErrors.email = "Fill in your email, please";
      //toast.error("Passwords don't match!");
    }
    //console.log("checik pass", form.password.length);
    if (inputs.password == "") {
      localErrors.password = "Fill in your password, please";
    }
    setErrors(localErrors);
    //console.log("test validations local  :", localErrors);
    //console.log("test validation state errors :", errors);
    return Object.values(localErrors).every((error) => !error) ? 1 : 0;
  };
  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formValidation()) {
      try {
        // @ts-ignore
        await dispatch(login(inputs));
      } catch (error) {
        toast.error("Login failed. Please try again.");
      }
    }
  };
  if (isAuthenticated) {
    toast.success("Successfully Login");
    setTimeout(() => navigate("/"), 1600); // Optional delay (adjust as needed)
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
              {errors.email != "" ? (
                <div className="text-left text-orange-700">{errors.email}</div>
              ) : (
                ""
              )}
              <input
                className="border-b-2  solid  py-5 px-3"
                value={inputs.password}
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Password"
              />
              {errors.password != "" ? (
                <div className="text-left text-orange-700">
                  {errors.password}
                </div>
              ) : (
                ""
              )}
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
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
