import React, { useState } from "react";
import illustration_desktop from "../assets/images/illustration-sign-up-desktop.svg";
import illustration_mobile from "../assets/images/illustration-sign-up-mobile.svg";
import icon_list from "../assets/images/icon-list.svg";

const Card = ({ email, setEmail, setSuscribed }) => {
  const [error, setError] = useState("");
  const handleSubmit = () => {
    const re =
      /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    re.exec(email) ? setSuscribed(true) : setError("Valid email required");
  };
  return (
    <section className="master">
      <article className="left-side">
        <h2 className="title"> Stay updated!</h2>
        <p className="description">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className="updates-list">
          <div className="bullets">
            <img src={icon_list} alt="icon-list.svg" />
            <p>Product discovery and building what matters</p>
          </div>
          <div className="bullets">
            <img src={icon_list} alt="icon-list.svg" />
            <p>Measuring to ensure updates are a success</p>
          </div>
          <div className="bullets">
            <img src={icon_list} alt="icon-list.svg" />
            <p>And much more!</p>
          </div>
        </div>
        <div className="email-form">
          <div className="label-error-container">
            <label htmlFor="email">Email address</label>
            <p className="text-error">{error}</p>
          </div>
          <input
            className={`email ${error ? "email-selected" : ""}`}
            type="email"
            name="email"
            id="email"
            placeholder="email@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn" onClick={handleSubmit}>
            Subscribe to monthly newsletter
          </button>
        </div>
      </article>
      <article className="right-side">
        <div className="illustration">
          <img
            className="desktop"
            src={illustration_desktop}
            alt="illustration-sign-up-desktop.svg"
          />
          <img
            className="mobile"
            src={illustration_mobile}
            alt="illustration-sign-up-mobile.svg"
          />
        </div>
      </article>
    </section>
  );
};

export default Card;
