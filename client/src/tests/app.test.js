import { render, screen } from "@testing-library/react";
import { renderer } from "react-test-renderer";
import App from "./../App";
import { ReactDOM } from "react-dom/client";

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

// snapshot test

describe("Popover", () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it("should render correctly with Node or Function", () => {
    const component = renderer.create(<App />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
