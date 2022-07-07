import { calculateRide } from "../src/calculateRide";

describe("Calculate ride function", () => {
  it("Should be able to calculate the normal ride", () => {
    const segments = [{ distance: 10, date: new Date("2022-07-06T10:00:00") }]; //given
    const fare = calculateRide(segments); //when
    expect(fare).toBe(21); //then
  });

  it("Should be able to calculate the ride overnight", () => {
    const segments = [{ distance: 10, date: new Date("2022-07-06T23:00:00") }];
    const fare = calculateRide(segments);
    expect(fare).toBe(39);
  });

  it("Should be able to calculate the ride in sunday", () => {
    const segments = [{ distance: 10, date: new Date("2021-03-07T10:00:00") }];
    const fare = calculateRide(segments);
    expect(fare).toBe(29);
  });

  it("Should be able to calculate the ride in sunday overnight", () => {
    const segments = [{ distance: 10, date: new Date("2021-03-07T23:00:00") }];
    const fare = calculateRide(segments);
    expect(fare).toBe(50);
  });

  it("Should not be able to calculate the ride if invalid distance is provided", () => {
    const segments = [{ distance: -2, date: new Date("2021-03-07T23:00:00") }];
    expect(() => calculateRide(segments)).toThrowError("Invalid distance");
  });

  it("Should not be able to calculate the ride if invalid date is provided", () => {
    const segments = [{ distance: 10, date: new Date("") }];
    expect(() => calculateRide(segments)).toThrowError("Invalid date");
  });

  it("Should be able to calculate the ride with minimum fare", () => {
    const segments = [{ distance: 1, date: new Date("2022-07-06T10:00:00") }];
    const fare = calculateRide(segments);
    expect(fare).toBe(10);
  });

  it("Should be able to calculate the ride on the 10th of each month", () => {
    const segments = [{ distance: 10, date: new Date("2022-07-10T10:00:00") }]; //given
    const fare = calculateRide(segments); //when
    expect(fare).toBe(0); //then
  });
});
