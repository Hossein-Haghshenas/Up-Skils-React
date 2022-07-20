import { render, screen } from "@testing-library/react";
import App from "./../App";

test("render header", () => {
  render(<App />);
  const header = screen.getByTestId("header");
  expect(header).toBeInTheDocument();
});

test("render home page", () => {
  render(<App />);
  const homePage = screen.getByTitle("home-page");
  expect(homePage).toBeInTheDocument();
});

test("render footer", () => {
  render(<App />);
  const footer = screen.getByRole("contentinfo");
  expect(footer).toBeInTheDocument();
});
