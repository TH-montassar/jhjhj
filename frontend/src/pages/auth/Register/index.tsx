import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { User, register } from "../../../redux/action/auth.action";
export const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault(); //man5alouch navigateur ya3mel relode
    setForm({ ...form, [e.target.name]: e.target.value });
    /* if (Form.password !== Form.confirmPassword) {
      console.log("hello this tow passs no matech ");
      toast.error("Passwords do not match", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } */

    console.log("Form Data:", form);
  };
  const dispatch = useDispatch();
  const OnSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(form));
    /*  setForm({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      confirmPassword: "",
    }); */
  };

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
      {/* <ToastContainer /> */}
    </div>
  );
};
