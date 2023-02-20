import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

beforeEach(() => {
  const history = createMemoryHistory();
  render(
    <BrowserRouter location={history.location} navigator={history}>
      <Login />
    </BrowserRouter>
  );
});

describe("Login", () => {
  it("Successfully renders component", () => {
    expect(screen.getByText("Welcome!")).toBeInTheDocument();
    expect(
      screen.getByText("Login below or sign up if this is your first time.")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Login" })).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Sign Up" })
    ).toBeInTheDocument();
  });

  it("Fails with front-end validation errors if missing required fields", () => {
    // TODO: Finish this test
  });

  it("Successfully POSTs if user is found and login is correct", () => {
    // TODO: Finish this test
  });

  it("Fails with backend validation errors if incorrect information or backend error", () => {
    // TODO: Finish this test
  });
});
