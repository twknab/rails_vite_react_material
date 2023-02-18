import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { BrowserRouter, Router } from "react-router-dom";
import App from "./App";


beforeEach(() => {
  const history = createMemoryHistory();
  const fetch = jest.fn();
  render(
    <BrowserRouter location={history.location} navigator={history}>
      <App />
    </BrowserRouter>
  );
});

describe("App", () => {
  it("successfully renders login", () => {
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

});
