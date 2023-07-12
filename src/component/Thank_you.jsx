import React from "react";
import icon_sucsess from "../assets/images/icon-success.svg";

const Thank_you = ({ email, setEmail, setSuscribed }) => {
  const handleSubmit = () => {
    setSuscribed(false);
    setEmail("");
  };
  return (
    <div className="thank-you">
      <div className="success">
        <img src={icon_sucsess} alt="" />
      </div>
      <h2 className="title-thx">Thanks for subscribing!</h2>
      <p className="confirmation">
        A confirmation email has been sent to <span>{email}</span>. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button className="btn" onClick={handleSubmit}>
        Dismiss message
      </button>
    </div>
  );
};

export default Thank_you;
