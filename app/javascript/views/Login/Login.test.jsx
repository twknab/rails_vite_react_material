import React from "react";
import { render, screen } from "@testing-library/react";
// import { BrowserRouter, Router } from "react-router-dom";
import Login from "./Login";

beforeEach(() => {
  render(
    <BrowserRouter location={history.location} navigator={history}>
      <App />
    </BrowserRouter>
  );
});

describe("App", () => {
  it("successfully renders login", () => {
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
