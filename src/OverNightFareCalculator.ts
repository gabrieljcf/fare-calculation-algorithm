import FareCalculator from "./FareCalculator";
import Segment from "./Segment";

export default class OverNightFareCalculator implements FareCalculator {
  FARE = 3.9;

  constructor(readonly next?: FareCalculator) {}

  calculate(segment: Segment) {
    if (!segment.isSunday() && segment.isOverNight())
      return segment.distance * this.FARE;
    if (!this.next) throw new Error();
    return this.next?.calculate(segment);
  }
}
