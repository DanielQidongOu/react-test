import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header Component", () => {
  test("renders navigation links", () => {
    render(<Header />);

    const homeLink = screen.getByText("Home");
    const aboutLink = screen.getByText("About");

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });
});
