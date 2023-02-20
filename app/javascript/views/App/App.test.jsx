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
    expect(screen.getByText("Welcome!")).toBeInTheDocument();
    expect(
      screen.getByText("Login below or sign up if this is your first time.")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Login" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Sign Up" })).toBeInTheDocument();
  });
});
