import robottosActionTypes from "../actions/actionTypes";

const robottosReducer = (robottos = [], action = {}) => {
  let newRobottos;

  switch (action.type) {
    case robottosActionTypes.loadRobottos:
      newRobottos = [...action.robottos];
      break;
    default:
      newRobottos = [...robottos];
  }
  return newRobottos;
};

export default robottosReducer;
