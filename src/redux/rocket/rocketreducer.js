import ActionType from './actionType';

const inState = {
  rockets: [
    { id: 1, name: 'falcon1', des: 'thebest' },
    { id: 2, name: 'falcon2', des: 'good' },
  ],
};

// eslint-disable-next-line no-unused-vars
export default function rocketReducer(state = inState, { type, payload }) {
  switch (type) {
    case ActionType.RESERVED:
      return state;
    case ActionType.CANCELERESERVED:
      return state;
    default:
      return state;
  }
}
