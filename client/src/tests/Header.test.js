import { render, screen } from "@testing-library/react";
import Header from "./../components/Header";
import headerMenuOptions from "../constants/header.menu.items.json";

test("render logo", () => {
  render(
    <Header
      pages={headerMenuOptions.pages}
      settings={headerMenuOptions.settings}
    />
  );
  const logo = screen.getByAltText("logo");
  expect(logo).toBeInTheDocument();
});

test("render logo in the xs size", () => {
  render(
    <Header
      pages={headerMenuOptions.pages}
      settings={headerMenuOptions.settings}
    />
  );
  const logo = screen.getByAltText("logo-xs");
  expect(logo).toBeInTheDocument();
});

/* test("render menu items", () => {
  render(
    <Header
      pages={headerMenuOptions.pages}
      settings={headerMenuOptions.settings}
    />
  );
  const menuItems = screen.queryAllByRole("button");
  expect(menuItems).toBeInTheDocument();
}); */
