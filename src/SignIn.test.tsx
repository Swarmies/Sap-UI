import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignIn from "./SignIn";

import "@testing-library/jest-dom/extend-expect";

test("renders sign in form", () => {
  // Render the component
  render(<SignIn />);

  // Check if the heading "Sign in" is present
  const heading = screen.getByRole("heading", { name: /Sign in/i });
  expect(heading).toBeInTheDocument();

  // Check if the email and password inputs are present
  const emailInput = screen.getByLabelText("Email Address");
  console.log(emailInput);
  expect(emailInput).toBeInTheDocument();
  const passwordInput = screen.getByLabelText("Password");
  expect(passwordInput).toBeInTheDocument();

  // Fill in the email and password inputs
  userEvent.type(emailInput, "test@example.com");
  userEvent.type(passwordInput, "password123");

  // Check if the "Sign In" button is present
  const signInButton = screen.getByRole("button", { name: /Sign In/i });
  expect(signInButton).toBeInTheDocument();

  // Click the "Sign In" button
  userEvent.click(signInButton);

  // Check if the "Sign In" button was clicked
  expect(signInButton).toBeEnabled();
});
