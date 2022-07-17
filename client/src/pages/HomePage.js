import React from "react";
import Article from "../components/Article";
import decor1 from "../assets/image/decor-1.png";
import decor2 from "../assets/image/decor-2.gif";
import decor3 from "../assets/image/decor-3.png";
import articleTexts from "../constants/HomePageArticleTexts.json";

function HomePage() {
  return (
    <section data-testid="homepage" className="home-page">
      <Article direction={"row"} text={articleTexts.firstText} image={decor1} />
      <Article
        direction={"row-reverse"}
        text={articleTexts.secondText}
        image={decor2}
      />
      <Article direction={"row"} image={decor3} text={articleTexts.thirdText} />
    </section>
  );
}

export default HomePage;
