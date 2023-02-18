import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

beforeEach(() => {
  const history = createMemoryHistory();
  render(
    <BrowserRouter location={history.location} navigator={history}>
      <App />
    </BrowserRouter>
  );
});

describe("App", () => {
  it("Successfully renders component", () => {
    expect(screen.getByText("Welcome")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Thanks for visiting. Login to begin, or register if this is your " +
        "first time."
      )
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Login" })).toBeInTheDocument();
  });
});
