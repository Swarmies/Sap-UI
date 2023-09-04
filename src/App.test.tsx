import React from "react";
import { render, RenderResult, waitFor } from "@testing-library/react";
import ConnectionExample from "./App";

// This should make the `toBeInTheDocument` matcher available in the test environment
import "@testing-library/jest-dom/extend-expect";

// This should make the `mutationobserver` global available in the test environment
// This should make the `waitFor` function available in the test environment
import "mutationobserver-shim";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("ConnectionExample component", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue([{ id: 1, name: "test" }]),
    } as any);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should fetch data from server and render component", async () => {
    const component: RenderResult = render(<ConnectionExample />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    expect(global.fetch).toHaveBeenCalledWith("http://localhost:8000/api/");
    expect(component.getByText("Connection Example")).toBeInTheDocument();
  });
});
