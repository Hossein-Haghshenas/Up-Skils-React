import { render, screen } from "@testing-library/react";
import ButtonCo from "./../components/ButtonCo";

it("render button", () => {
  render(<ButtonCo />);
  const button = screen.getByRole("button", { name: "Home" });
  expect(button).toBeDisabled();
});
