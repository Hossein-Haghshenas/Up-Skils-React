import { render, screen } from "@testing-library/react";
import HomePage from "../pages/HomePage";

it("render article headings", () => {
  render(<HomePage />);
  const heading = screen.getAllByRole("heading");
  heading.map((item) => expect(item).toBeInTheDocument());
});

it("render article image", () => {
  render(<HomePage />);
  const image = screen.getAllByRole("img");
  image.map((item) => expect(item).toBeInTheDocument());
  expect(image.length).toBe(3);
});
