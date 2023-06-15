import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { Routes, Route, Link } from "react-router-dom";
import SignIn from "./screens/SignIn";
import Registration from "./screens/signup/Registration";
import Payment from "./screens/signup/Payment";
import EmailVerification from "./screens/signup/EmailVerification";
import AccessCode from "./screens/signup/AccessCode";
import Pricing from "./screens/WebsitePages/Pricing";
import WhatWeDo from "./screens/WebsitePages/WhatWeDo";
import AboutUs from "./screens/WebsitePages/AboutUs";
import Home from "./screens/WebsitePages/Home";
import ForgetPassword from "./screens/password/ForgetPassword";
import ValidateEmail from "./screens/password/ValidateEmail";
import NewPassword from "./screens/password/NewPassword";
import Team from "./screens/WebsitePages/Team";
import Profile from "./screens/profile/Profile";
import ChangeEmail from "./screens/profile/ChangeEmail";
import ChangeUsername from "./screens/profile/ChangeUsername";
import ChangePassword from "./screens/profile/ChangePassword";
import ActivePlan from "./screens/profile/ActivePlan";
import ChangeSettings from "./screens/profile/ChangeSettings";
import ProfileSettings from "./screens/profile/ProfileSettings";
import Indesign from "./components/Indesign";
import ChangeFullName from "./screens/profile/ChangeFullName";


const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    setisLoggedIn(
      Number(
        localStorage.getItem("isLoggedIn") != undefined
          ? localStorage.getItem("isLoggedIn")
          : 0
      )
    );

    window.addEventListener("error", (e) => {
      if (e.message === "ResizeObserver loop limit exceeded") {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);

  return (
    <>
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="*" element={<h1 className="text-center pt-5 h3">This page does not exist.</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/emailVerification" element={<EmailVerification />} />
          <Route path="/accessCode" element={<AccessCode />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/whatWeDo" element={<WhatWeDo />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/validateEmail" element={<ValidateEmail />} />
          <Route path="/newPassword" element={<NewPassword />} />
          <Route path="/team" element={<Team />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profileSettings" element={<ProfileSettings />} />
          <Route path="/changeSettings" element={<ChangeSettings />} />
          <Route path="/changeEmail" element={<ChangeEmail />} />
          <Route path="/changeUsername" element={<ChangeUsername />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/changeFullName" element={<ChangeFullName />} />
          <Route path="/activePlan" element={<ActivePlan />} />
        </Routes>

      </main>
     
    </>
  );
};

export default App;
