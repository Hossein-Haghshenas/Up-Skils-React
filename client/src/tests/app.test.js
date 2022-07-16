import { render, screen } from "@testing-library/react";
import App from "./../App";

test("render header", () => {
  render(<App />);
  const footer = screen.getByTestId("header");
  expect(footer).toBeInTheDocument();
});

test("render homepage", () => {
  render(<App />);
  const footer = screen.getByTestId("homepage");
  expect(footer).toBeInTheDocument();
});

test("render footer", () => {
  render(<App />);
  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();
});
