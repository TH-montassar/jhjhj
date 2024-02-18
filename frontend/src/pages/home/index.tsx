import React, { useEffect } from "react";
import { authCheck, logout } from "../../redux/action/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken } from "../../utils/setAuthToken";
import { RootState, store } from "../../redux/store";

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
