import React from "react";
import "./Articles.css";
import money from "../../assets/images/image-currency.jpg";
import plane from "../../assets/images/image-plane.jpg";
import restaurant from "../../assets/images/image-restaurant.jpg";
import confetti from "../../assets/images/image-confetti.jpg";

const articleData = [
  {
    image: money,
    person: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    para: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    image: restaurant,
    person: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    para: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you … ",
  },
  {
    image: plane,
    person: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    para: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …",
  },
  {
    image: confetti,
    person: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    para: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ... ",
  },
];

const Articles = () => {
  return (
    <section className="article_container">
      <div className="article_head">
        <h2>Latest Articles</h2>
      </div>
      <div className="articles">
        {articleData.map((article, index) => {
          return (
            <div className="article_box" key={index}>
              <img src={article.image} alt="" />
              <p className="person">{article.person}</p>
              <h4>{article.title}</h4>
              <p className="para">{article.para}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Articles;
