import React, { useRef, useState } from "react";
import ProfileSettingCard from "../../components/ProfileSettingCard";
import { useNavigate } from "react-router-dom";

const ChangeUsername = () => {
  const navigate = useNavigate();
  let [message, setMessage] = useState();
  let [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => navigate("/changeSettings");
  const handleShow = () => setShow(true);

  const jwtbyLogin = localStorage.getItem("jwtbyLogin");

  let usernameRef = useRef();
  let confirmusernameRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    let username = usernameRef.current.value;
    let confirmusername = confirmusernameRef.current.value;

    if (username && confirmusername) {
      if (username !== confirmusername) {
        setMessage("Fields not match.");
      } else {
        try {
          setLoading(true);
          let res = await fetch(
            process.env.REACT_APP_BASE_URL + `/users/changeusername`,
            {
              method: "POST",
              body: JSON.stringify({
                username: username,
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
            localStorage.setItem("username", username);
          }
        } catch (err) {
          setLoading(false);
          console.log(err);
          setMessage(
            "Problem with changing username, contact Customer Support."
          );
        }
      }
    } else if (!username || !confirmusername) {
      setMessage("Enter all credentials.");
    }
  };

  return (
    <>
      <ProfileSettingCard
        pageTitle="Change Username"
        pageDescription="Please write your new username and confirm it."
        inputTitle="New Username"
        confirmInput="Confirm New Username"
        buttonTitle="Change Username"
        placeholder="@yourusername"
        successTitle="Username"
        successTitletext="username"
        submitHandler={submitHandler}
        message={message}
        confirmInputRef={confirmusernameRef}
        show={show}
        handleClose={handleClose}
        inputRef={usernameRef}
        loading={loading}
        inputType="text"
      />
    </>
  );
};

export default ChangeUsername;
