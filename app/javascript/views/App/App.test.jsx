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
    const { getByText, queryByRole } = screen;
    expect(getByText("Welcome")).toBeInTheDocument();
    expect(
      getByText(
        "Thanks for visiting. Login to begin, or register if this is your " +
        "first time."
      )
    ).toBeInTheDocument();
    expect(getByText("Register")).toBeInTheDocument();
    expect(queryByRole("button", { name: "Login" })).toBeInTheDocument();
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
