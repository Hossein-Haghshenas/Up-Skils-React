import { render, screen } from "@testing-library/react";
import Footer from "./../components/Footer";

it("render footer text", () => {
  render(<Footer text="Made with ❤️ by HosseinDeveloper" />);
  const footer = screen.getByText(/Made with ❤️ by HosseinDeveloper/i);
  expect(footer).toBeInTheDocument();
});
