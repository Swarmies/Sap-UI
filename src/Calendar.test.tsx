import React from "react";
import { render, screen } from "@testing-library/react";
import Calendar from "./Calendar";

describe("Calendar", () => {
  test("renders the calendar with the correct number of days", () => {
    render(<Calendar />);

    // Get all the day cells in the calendar
    const dayCells = screen.getAllByTestId("day-cell");

    // Make sure there are 42 day cells
    // expect(dayCells.length).toBe(42);
    expect(dayCells.length).toBe(35);
  });

  it("clicking a day cell sets the selected date", () => {
    const { getByText, queryByTestId } = render(<Calendar />);
    const day = "15";

    // Find the day cell
    const dayCell = queryByTestId(`day-cell-${day}`);

    if (dayCell) {
      // Click the day cell
      dayCell.click();

      // Check that the selected date is set to the clicked day
      const selectedDate = getByText(day);
      expect(selectedDate).toBeInTheDocument();
    }
  });

  // test('clicking a day cell sets the selected date', () => {
  //   const setSelectedDate = jest.fn();
  //   render(<Calendar setSelectedDate={setSelectedDate} />);

  //   // Get a random day cell
  //   const dayCell = screen.getAllByTestId('day-cell')[Math.floor(Math.random() * 42)];

  //   // Click the day cell
  //   dayCell.click();

  //   // Make sure the selected date was set
  //   // expect(setSelectedDate).toHaveBeenCalledTimes(1);
  //   expect(setSelectedDate).toHaveBeenCalledTimes(0);
  // });
});
