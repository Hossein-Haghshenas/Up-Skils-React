import Article from "../components/Article";

export default {
  title: "HomePage/Article",
  component: Article,
  argTypes: {
    direction: { control: "text" },
    text: { control: "text" },
    image: { control: "text" },
  },
};

const firstArticleText = "Experience The Best Qulaity Music";
const secondArticleText = "Search Music by Name or Direct URL";
const thirdArticleText = "Enjoy listening to them";

const firstArticleImage = require("../assets/image/decor-1.png");
const secondArticleImage = require("../assets/image/decor-2.gif");
const thirdArticleImage = require("../assets/image/decor-3.png");

const Template = (args) => <Article {...args} />;

export const Article1 = Template.bind({});

Article1.args = {
  direction: "row",
  text: firstArticleText,
  image: firstArticleImage,
};

export const Article2 = Template.bind({});

Article2.args = {
  direction: "row-reverse",
  text: secondArticleText,
  image: secondArticleImage,
};

export const Article3 = Template.bind({});

Article3.args = {
  direction: "row",
  text: thirdArticleText,
  image: thirdArticleImage,
};
