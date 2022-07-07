import NormalFareCalculator from "../src/NormalFareCalculator";
import OverNightFareCalculator from "../src/OverNightFareCalculator";
import OverNightSundayFareCalculator from "../src/OverNightSundayFareCalculator";
import SpecialDayFareCalculator from "../src/SpecialDayFareCalculator";
import SundayFareCalculator from "../src/SundayFareCalculator";
import Ride from "../src/Ride";

describe("Calculate ride function", () => {
  let ride: Ride;
  beforeEach(() => {
    const normalFareCalculator = new NormalFareCalculator();
    const sundayFareCalculator = new SundayFareCalculator(normalFareCalculator);
    const overNightFareCalculator = new OverNightFareCalculator(
      sundayFareCalculator
    );
    const overNightSundayFareCalculator = new OverNightSundayFareCalculator(
      overNightFareCalculator
    );
    const specialDayFareCalculator = new SpecialDayFareCalculator(overNightSundayFareCalculator)
    ride = new Ride(specialDayFareCalculator);
  });
  it("Should be able to calculate the normal ride", () => {
    ride.addSegment(10, new Date("2022-07-06T10:00:00"));
    const fare = ride.finish();
    expect(fare).toBe(21);
  });

  it("Should be able to calculate the ride overnight", () => {
    ride.addSegment(10, new Date("2022-07-06T23:00:00"));
    const fare = ride.finish();
    expect(fare).toBe(39);
  });

  it("Should be able to calculate the ride in sunday", () => {
    ride.addSegment(10, new Date("2021-03-07T10:00:00"));
    const fare = ride.finish();
    expect(fare).toBe(29);
  });

  it("Should be able to calculate the ride in sunday overnight", () => {
    ride.addSegment(10, new Date("2021-03-07T23:00:00"));
    const fare = ride.finish();
    expect(fare).toBe(50);
  });

  it("Should not be able to calculate the ride if invalid distance is provided", () => {
    expect(() =>
      ride.addSegment(-1, new Date("2021-03-07T23:00:00"))
    ).toThrowError("Invalid distance");
  });

  it("Should not be able to calculate the ride if invalid date is provided", () => {
    expect(() => ride.addSegment(10, new Date(""))).toThrowError(
      "Invalid Date"
    );
  });

  it("Should be able to calculate the ride with minimum fare", () => {
    ride.addSegment(3, new Date("2022-07-06T10:00:00"));
    const fare = ride.finish();
    expect(fare).toBe(10);
  });

  it("Should be able to calculate the ride on the 10th of each month", () => {
    ride.addSegment(10, new Date("2022-07-10T10:00:00"));
    const fare = ride.finish();
    expect(fare).toBe(15);
  });
});
