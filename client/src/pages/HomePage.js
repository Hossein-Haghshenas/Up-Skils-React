import React from "react";
import Article from "../components/Article";

const firstArticleText = "Experience The Best Qulaity Music";
const secondArticleText = "Search Music by Name or Direct URL";
const thirdArticleText = "Enjoy listening to them";

const firstArticleImage = require("../assets/image/decor-1.png");
const secondArticleImage = require("../assets/image/decor-2.gif");
const thirdArticleImage = require("../assets/image/decor-3.png");

function HomePage() {
  return (
    <section className="home-page">
      <Article
        direction={"row"}
        text={firstArticleText}
        image={firstArticleImage}
      />
      <Article
        direction={"row-reverse"}
        text={secondArticleText}
        image={secondArticleImage}
      />
      <Article
        direction={"row"}
        image={thirdArticleImage}
        text={thirdArticleText}
      />
    </section>
  );
}

export default HomePage;
