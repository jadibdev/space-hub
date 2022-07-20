import ActionType from './actionType';

const inState = {
  rockets: [],
};
// eslint-disable-next-line no-unused-vars
export default function rocketReducer(state = inState, { type, payload }) {
  switch (type) {
    case ActionType.FETCHDATA:
      return { ...state, rockets: payload };
    case ActionType.RESERVED:
      return state;
    case ActionType.CANCELERESERVED:
      return state;
    default:
      return state;
  }
}
