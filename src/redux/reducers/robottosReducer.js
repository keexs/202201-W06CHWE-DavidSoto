import robottosActionTypes from "../actions/actionTypes";

const currentRobottoReducer = (robotto = {}, action = {}) => {
  let newCurrentRobotto;

  if (action.type === robottosActionTypes.loadRobottos) {
    newCurrentRobotto = { ...action.robotto };
  } else {
    newCurrentRobotto = { ...robotto };
  }
  return newCurrentRobotto;
};

export default currentRobottoReducer;
