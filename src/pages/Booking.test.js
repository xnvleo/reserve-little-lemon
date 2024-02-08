import { updateTimes, initializeTimes } from "./Booking";
import { fetchAPI } from "../fakeApi";
import { describe, it, expect, vi, test } from "vitest";

// the initialTimes should return a new array of times
describe("initializeTimes", () => {
  it("should return an array of available times", () => {
    const result = initializeTimes();

    expect(result).toEqual(fetchAPI(new Date()));
  });
});

// mock the fetchAPI function to return a fixed array of times
vi.mock("../fakeApi", () => ({
  fetchAPI: vi.fn(() => ["10:00", "11:00", "12:00"]),
}));

test("updateTimes should return a new array of times based on the new date", () => {
  // given an initial array of times and a date
  const initialTimes = ["9:00", "10:00", "11:00"];
  const date = "2024-02-08";

  // when updateTimes is called with the initial times and the date
  const newTimes = updateTimes(initialTimes, date);

  // then the new times should be the same as the mock fetchAPI response
  expect(newTimes).toEqual(["10:00", "11:00", "12:00"]);
});
