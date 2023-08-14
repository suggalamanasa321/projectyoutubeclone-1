import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "./logo.ico";
import SearchBar from "../SearchBar/SearchBar";
import { RiVideoAddLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";
import Auth from "../pages/Auth/Auth";
import { useState } from "react";

function Navbar({ toggleDrawer, setEditCreateChannelBtn }) {
  const [AuthBtn, setAuthBtn] = useState(false);

  //  const CurrentUser = null;

  // const CurrentUser = {
  //     result: {
  //         email: 'xyz@gmail.com',
  //         joinedOn: '2222-07-IST09:57:23.4892',
  //     },
  // };

  const CurrentUser = useSelector((state) => state.currentUserReducer);
  // console.log(CurrentUser);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "76636190551-7ou0rt61vd06mi946m2qjtv70ofar48l.apps.googleusercontent.com",
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const dispatch = useDispatch();

  const onSuccess = (response) => {
    const Email = response.profileObj.email;
    console.log(Email);
    dispatch(login({ email: Email }));
  };

  const onFailure = (response) => {
    console.log("Failed", response);
  };

  return (
    <>
      <div className="container_navbar">
        <div className="Burger_logo_navbar">
          <div className="burger" onClick={toggleDrawer}>
            <p></p>
            <p></p>
            <p></p>
          </div>

          <Link to={"/"} className="logo_div_navbar">
            <img src={logo} alt=""></img>
            <p className="logo_title_navbar">YouTube</p>
          </Link>
        </div>
        <SearchBar />
        <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
        <div className="apps_Box">
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
        </div>
        <IoMdNotificationsOutline size={22} className="vid_bell_Navbar" />
        <div className="Auth_cont_Navbar">
          {CurrentUser ? (
            <>
              <div
                className="channel_logo_App"
                onClick={() => setAuthBtn(true)}
              >
                <p className="fstChar_logo_App">
                  {CurrentUser.result.name ? (
                    <>{CurrentUser.result.name.charAt(0).toUpperCase()}</>
                  ) : (
                    <>{CurrentUser.result.email.charAt(0).toUpperCase()}</>
                  )}
                </p>
              </div>
            </>
          ) : (
            <>
              <GoogleLogin
                clientId={
                  "76636190551-7ou0rt61vd06mi946m2qjtv70ofar48l.apps.googleusercontent.com"
                }
                onSuccess={onSuccess}
                onFailure={onFailure}
                render={(renderProps) => (
                  <p onClick={renderProps.onClick} className="Auth_Btn">
                    <BiUserCircle size={22} />
                    <b>Sign in</b>
                  </p>
                )}
              />
            </>
          )}
        </div>
      </div>
      {AuthBtn && (
        <Auth
          setEditCreateChannelBtn={setEditCreateChannelBtn}
          setAuthBtn={setAuthBtn}
          User={CurrentUser}
        />
      )}
    </>
  );
}

export default Navbar;