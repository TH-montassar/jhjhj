import React, { useEffect, useState } from "react";
import { authCheck, logout } from "../../redux/action/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken } from "../../utils/setAuthToken";
import { RootState, store } from "../../redux/store";

export const Home = () => {
  interface User {
    firstName: string;
    lastName: string;
  }
  const dispatch = useDispatch();

  // Logout Handler
  const logoutHandler = () => {
    // @ts-ignore
    dispatch(logout());
  };
  // *get current user by local storage
  /* const [user, setCurrentUser] = useState({});
  const getCurrentUserData = () => {
    // @ts-ignore
    setCurrentUser(JSON.parse(localStorage.getItem("userInfo")));
  };

  useEffect(() => {
    getCurrentUserData();
  }, []); */
  // *get current user by local storage

  // *get current user by state Redux
  const { user, message, pending, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  // *get current user by state Redux

  const currentUser = user as User;

  return (
    <div>
      <p>
        <button type="button" onClick={logoutHandler}>
          testLogout
        </button>
      </p>
      Home hello
      <p>{currentUser.lastName}</p>
    </div>
  );
};
