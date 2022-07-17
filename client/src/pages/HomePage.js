import React from "react";
import Article from "../components/Article";
import decor1 from "../assets/image/decor-1.png";
import decor2 from "../assets/image/decor-2.gif";
import decor3 from "../assets/image/decor-3.png";

const firstArticleText = "Experience The Best Qulaity Music";
const secondArticleText = "Search Music by Name or Direct URL";
const thirdArticleText = "Enjoy listening to them";

function HomePage() {
  return (
    <section data-testid="homepage" className="home-page">
      <Article direction={"row"} text={firstArticleText} image={decor1} />
      <Article
        direction={"row-reverse"}
        text={secondArticleText}
        image={decor2}
      />
      <Article direction={"row"} image={decor3} text={thirdArticleText} />
    </section>
  );
}

export default HomePage;
