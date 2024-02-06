import React from "react";
import oapi from "../../assets/images/icon-api.svg";
import online from "../../assets/images/icon-online.svg";
import board from "../../assets/images/icon-onboarding.svg";
import budget from "../../assets/images/icon-budgeting.svg";
import "./Choice.css"

const choiceData = [
  {
    icon: online,
    title: "Online Banking",
    para: "Online Banking Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: budget,
    title: "Simple Budgeting",
    para: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },
  {
    icon: board,
    title: "Fast Onboarding",
    para: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    icon: oapi,
    title: "Open API",
    para: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const Choice = () => {
  return <section className="choice_container">
    <h2>Why choose Easybank?</h2>
    <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before. </p>
    <div className="choice_flex">
        {choiceData.map((data, index) => {
            return <div className="choice_box" key={index}>
                <img src={data.icon} alt="" />
                <h3>{data.title}</h3>
                <p>{data.para}</p>
            </div>
        })}
    </div>
  </section>;
};

export default Choice;
