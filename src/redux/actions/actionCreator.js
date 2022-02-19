import robottosActionTypes from "./actionTypes";

export const loadRobottos = (robottos) => ({
  type: robottosActionTypes.loadRobottos,
  robottos,
});
