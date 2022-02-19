import robottosActionTypes from "../actions/actionTypes";
import robottosReducer from "./robottosReducer";

describe("Given a robottosReducer function", () => {
  describe("When it recives a loadRobottos with a robottos", () => {
    test("Then it should return the action with robottos", () => {
      const robottos = [{ name: "bla", speed: "3", endurance: "4" }];

      const newRobottos = [{ name: "blabla", speed: "4", endurance: "5" }];

      const action = {
        type: robottosActionTypes.loadRobottos,
        robottos: newRobottos,
      };

      const newRobottosResult = robottosReducer(robottos, action);
      expect(newRobottosResult).toEqual(newRobottos);
    });
  });
});
