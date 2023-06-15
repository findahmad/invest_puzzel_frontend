import React, { useRef, useState } from "react";
import ProfileSettingCard from "../../components/ProfileSettingCard";
import { useNavigate } from "react-router-dom";
const ChangeEmail = () => {
  const navigate = useNavigate();
  let [message, setMessage] = useState();
  let [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => navigate("/changeSettings");
  const handleShow = () => setShow(true);

  const jwtbyLogin = localStorage.getItem("jwtbyLogin");

  let emailRef = useRef();
  let confirmemailRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    let email = emailRef.current.value;
    let confirmemail = confirmemailRef.current.value;

    if (email && confirmemail) {
      if (email !== confirmemail) {
        setMessage("Fields not match.");
      } else {
        try {
          setLoading(true);
          let res = await fetch(
            process.env.REACT_APP_BASE_URL + `/users/changeemail`,
            {
              method: "POST",
              body: JSON.stringify({
                email: email,
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
            localStorage.setItem("userEmail", email);
          }
        } catch (err) {
          setLoading(false);
          console.log(err);
          setMessage("Problem with changing email, contact Customer Support.");
        }
      }
    } else if (!email || !confirmemail) {
      setMessage("Enter all credentials.");
    }
  };

  return (
    <>
      <ProfileSettingCard
        pageTitle="Change Email"
        pageDescription="Please write your new email and confirm it."
        inputTitle="New Email"
        confirmInput="Confirm New Email"
        buttonTitle="Change email"
        placeholder="Type your email"
        successTitle="Email"
        successTitletext="email"
        submitHandler={submitHandler}
        message={message}
        confirmInputRef={confirmemailRef}
        show={show}
        handleClose={handleClose}
        inputRef={emailRef}
        loading = {loading}
        inputType="email"
      />
    </>
  );
};

export default ChangeEmail;
