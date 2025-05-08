import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders Sign In page by default", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /sign in/i })).toBeInTheDocument();
});

test("renders Sign Up page", () => {
  window.history.pushState({}, "Sign Up Page", "/signup");
  render(<App />);
  expect(screen.getByText(/sign up/i)).toBeInTheDocument();
});

test("renders Dashboard page", () => {
  window.history.pushState({}, "Dashboard Page", "/dashboard");
  render(<App />);
  expect(screen.getByText(/virtual currency exchange/i)).toBeInTheDocument();
});
