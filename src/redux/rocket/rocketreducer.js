import ActionType from './actionType';

export default function rocketReducer(state = [], { type, payload }) {
  switch (type) {
    case ActionType.ROCKETLOADED:
      return payload;
    case ActionType.RESERVED:
      return state.map((rocket) => {
        if (rocket.id !== parseInt(payload, 10)) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
    case ActionType.CANCELERESERVED:
      return state.map((rocket) => {
        if (rocket.id !== parseInt(payload, 10)) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
    default:
      return state;
  }
}
