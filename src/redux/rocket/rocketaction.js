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
