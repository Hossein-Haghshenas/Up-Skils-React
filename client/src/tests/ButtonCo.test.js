import { render, screen } from "@testing-library/react";
import ButtonCo from "./../components/ButtonCo";

it("render button", () => {
  render(<ButtonCo children="Home" />);
  const button = screen.getByRole("button", { name: "Home" });
  expect(button).toBeInTheDocument();
});
