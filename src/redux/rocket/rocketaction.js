import ActionType from './actionType';

export default function Reserved(rocket) {
  return {
    type: ActionType.RESERVED,
    payload: rocket,
  };
}

export function Cancel(rocket) {
  return {
    type: ActionType.CANCELERESERVED,
    payload: rocket,
  };
}

export function setData(rocket) {
  return {
    type: ActionType.FETCHDATA,
    payload: rocket,
  };
}
