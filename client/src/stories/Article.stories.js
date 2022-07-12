import Article from "../components/Article";

export default {
  title: "HomePage/Article",
  component: Article,
};

const firstArticleText = "Experience The Best Qulaity Music";
const secondArticleText = "Search Music by Name or Direct URL";
const thirdArticleText = "Enjoy listening to them";

const firstArticleImage = require("../image/decor-1.png");
const secondArticleImage = require("../image/decor-2.gif");
const thirdArticleImage = require("../image/decor-3.png");

export const Article1 = () => (
  <Article
    direction={"row"}
    text={firstArticleText}
    image={firstArticleImage}
  />
);
export const Article2 = () => (
  <Article
    direction={"row-reverse"}
    text={secondArticleText}
    image={secondArticleImage}
  />
);
export const Article3 = () => (
  <Article
    direction={"row"}
    text={thirdArticleText}
    image={thirdArticleImage}
  />
);
