import { loadRobottos } from "./actionCreator";
import robottosActionTypes from "./actionTypes";

describe("Given an actionCreator loadRobottos", () => {
  describe("When it recives a robottos", () => {
    test("Then it should return an object with type: loadRobottos and the robottos", () => {
      const robottos = [{ name: "bla", speed: "3", endurance: "4" }];
      const actionType = robottosActionTypes.loadRobottos;

      const expectedResult = { type: actionType, robottos };
      const result = loadRobottos(robottos);

      expect(result).toEqual(expectedResult);
    });
  });
});
