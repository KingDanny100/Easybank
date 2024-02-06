import React from "react";
import "./Header.css";
import phones from "../../assets/images/image-mockups.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="background"></div>
        <img src={phones} alt="" className="header_image" />
        <div className="head_div">
          <h2>Next generation digital banking</h2>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="head_button">Request Invite</button>
        </div>
      </header>
      <img src={phones} alt="" className="alt_image" />
    </>
  );
};

export default Header;
