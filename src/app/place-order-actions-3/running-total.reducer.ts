import { combineReducers } from 'redux';

function runningTotal(currentRunningTotal: number = 0, action) {
  if (action.type === 'PLACE_ORDER') {
    return currentRunningTotal + action.orderTotal;
  }
  return currentRunningTotal;
}

export const rootReducer = combineReducers({
  runningTotal,
});
