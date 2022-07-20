import { render, screen } from "@testing-library/react";
import Text from "../components/Text";

it("render texts", () => {
  render(<Text children="hey its a test" />);
  const text = screen.getByText(/hey its a test/i);
  expect(text).toBeInTheDocument();
});
