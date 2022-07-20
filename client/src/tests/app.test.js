import { render, screen } from "@testing-library/react";
import App from "./../App";

test("render header", () => {
  render(<App />);
  const footer = screen.getByTestId("header");
  expect(footer).toBeInTheDocument();
});
