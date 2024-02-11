import React from "react";
import { logout } from "../../redux/action/auth.action";
import { useDispatch } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();

  // Logout Handler
  const logoutHandler = () => {
    // @ts-ignore
    dispatch(logout());
  };

  return (
    <div>
      <p>
        <button type="button" onClick={logoutHandler}>
          testLogout
        </button>
      </p>
      Home
    </div>
  );
};
