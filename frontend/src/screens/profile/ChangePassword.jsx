import React, { useRef, useState } from "react";
import ProfileSettingCard from "../../components/ProfileSettingCard";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {

  const navigate = useNavigate();
  let [message, setMessage] = useState();
  let [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => navigate('/changeSettings');
  const handleShow = () => setShow(true);

  const jwtbyLogin = localStorage.getItem("jwtbyLogin");

  let passwordRef = useRef();
  let confirmpasswordRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    let password = passwordRef.current.value;
    let confirmpassword = confirmpasswordRef.current.value;

    if (password && confirmpassword) {
      if (password !== confirmpassword) {
        setMessage("Fields not match.");
      } else {
        try {
          setLoading(true);
          let res = await fetch(
            process.env.REACT_APP_BASE_URL + `/users/changepassword`,
            {
              method: "POST",
              body: JSON.stringify({
                password: password,
              }),
              headers: {
                Authorization: `Bearer ${jwtbyLogin}`,
                "Content-type": "application/json",
              },
            }
          );
    
          let data = await res.json();
          console.log(data);
          setLoading(false);
    
          if (res.status !== 200) {
            setMessage(data.message);
            
          } else {
            handleShow();
          }
        } catch (err) {
          setLoading(false);
          console.log(err);
          setMessage("Problem with changing password, contact Customer Support.");
        }
      }
    } else if (!password || !confirmpassword) {
      setMessage("Enter all credentials.");
    }
  };

  return (
    <>

<ProfileSettingCard
        pageTitle="Change Password"
        pageDescription="Please write your new password and confirm it."
        inputTitle="New Password"
        confirmInput="Confirm New Password"
        buttonTitle="Change password"
        placeholder="Type your password.."
        successTitle="Password"
        successTitletext="password"
        submitHandler={submitHandler}
        message={message}
        confirmInputRef={confirmpasswordRef}
        show={show}
        handleClose={handleClose}
        inputRef={passwordRef}
        loading = {loading}
        inputType="password"
      />


    </>
  );
};



export default ChangePassword;



