import React from "react";
import Article from "./Article";

const firstArticleText = "Experience The Best Qulaity Music";
const secondArticleText = "Search Music by Name or Direct URL";
const thirdArticleText = "Enjoy listening to them";

const firstArticleImage = require("../image/decor-1.png");
const secondArticleImage = require("../image/decor-2.gif");
const thirdArticleImage = require("../image/decor-3.png");

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
