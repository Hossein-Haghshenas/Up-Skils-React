import { fireEvent, render, screen } from "@testing-library/react";
import ButtonCo from "./../components/ButtonCo";

it("render button", () => {
  render(<ButtonCo children="Home" />);
  const button = screen.getByRole("button", { name: "Home" });
  expect(button).toBeInTheDocument();
  expect(button).toBeEnabled();
});

it("should button be disabled", () => {
  render(<ButtonCo children="Home" disabled />);
  const button = screen.getByText(/Home/i);
  expect(button).toHaveAttribute("disabled");
  expect(button).toBeDisabled();
});

it("should have event", () => {
  const mockHandleClick = jest.fn();
  render(<ButtonCo children="Home" onClick={mockHandleClick} />);
  const button = screen.getByText(/Home/i);
  // run event
  fireEvent.click(button);
  // check the event should call one time
  expect(mockHandleClick).toBeCalledTimes(1);
});
