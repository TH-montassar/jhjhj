import { Link, Navigate, useNavigate } from "react-router-dom";
import "./index.css";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { register } from "../../../redux/action/auth.action";
import { Loader } from "../../../Shared/Loader";
export const Register = () => {
  const { user, message, isSuccess, pending, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault(); //may5alich navigator ya3mel reload
    setForm({ ...form, [e.target.name]: e.target.value });

    //console.log("Form Data:", form);
  };

  //const OnSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
  //  e.preventDefault();
  //  if (form.password !== form.confirmPassword) {
  //    //console.log("hello this tow passs no matech ");
  //    toast.error("Passwords don't match!");
  //    return; // Prevent further execution if they don't match
  //  }
  //
  //  // @ts-ignore
  //  dispatch(register(form))
  //    .then(() => {
  //      /*  setForm({
  //        email: "",
  //        password: "",
  //        firstName: "",
  //        lastName: "",
  //        confirmPassword: "",
  //      }); */
  //      // @ts-ignore
  //      //const statusMessage = message.match(/(\d+)/);
  //      // @ts-ignore
  //      //onsole.log(`status is ${statusMessage[0]}`);
  //      //console.log(`message is ${message}`);
  //      console.log(`hello status ${user.status}`);
  //
  //      // @ts-ignore
  //      if (!isSuccess) {
  //        // @ts-ignore
  //        toast.error(`Registration failed!Email already exist maybe`);
  //        return;
  //      } // Add success toast after successful registration
  //      setForm({
  //        email: "",
  //        password: "",
  //        firstName: "",
  //        lastName: "",
  //        confirmPassword: "",
  //      });
  //      toast.success(`Registration successful! ${message}`);
  //      setTimeout(() => navigate("/login"), 1600); // Optional delay (adjust as needed)
  //    })
  //    .catch((error: any) => {
  //      console.log(error);
  //      console.error("hello error");
  //      // @ts-ignore
  //      toast.error("Registration failed!", { error }); // Include error details in the toast
  //    });
  //};
  const OnSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords don't match!");
      return; // Prevent further execution if passwords don't match
    }

    try {
      // Set submitting state to true
      setSubmitting(true);
      // @ts-ignore
      await dispatch(register(form));
    } catch (error) {
      // Handle other errors
      console.log(error);
      console.error("hello error");
      // @ts-ignore
      toast.error("Registration failed!", { error }); // Include error details in the toast
    }
  };
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    // Check Redux state after dispatch is complete
    if (submitting && isSuccess !== null) {
      if (isSuccess) {
        // Successful registration
        setForm({
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          confirmPassword: "",
        });
        toast.success(`Registration successful! ${message}`);
        setTimeout(() => navigate("/login"), 1600); // Optional delay (adjust as needed)
      } else {
        // Registration failed
        toast.error(`Registration failed! ${message}`);
      }
      setSubmitting(false); // Reset submitting state
    }
  }, [isSuccess, message, navigate]);

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      {pending && (
        <div>
          <Loader />
        </div>
      )}
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
            <form
              className=" flex flex-col gap-8"
              onSubmit={(e) => OnSubmitForm(e)}
            >
              <input
                className=" border-b-2 solid  py-5 px-3"
                type="text"
                name="firstName"
                placeholder="firstName"
                value={form.firstName}
                onChange={(e) => onInputChange(e)}
              />
              <input
                className="border-b-2  solid  py-5 px-3"
                type="text"
                name="lastName"
                placeholder="lastName"
                value={form.lastName}
                onChange={(e) => onInputChange(e)}
              />
              <input
                className="border-b-2  solid  py-5 px-3"
                type="email"
                name="email"
                placeholder="exemple@gmail.com"
                value={form.email}
                onChange={(e) => onInputChange(e)}
              />

              <input
                className="border-b-2  solid  py-5 px-3"
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => onInputChange(e)}
              />
              <input
                className="border-b-2  solid  py-5 px-3"
                type="password"
                name="confirmPassword"
                placeholder="confirmPassword"
                value={form.confirmPassword}
                onChange={(e) => onInputChange(e)}
              />

              <button
                type="submit"
                className="w-1/2 p-3 border-none bg-[#938eef] text-white cursor-pointer "
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
