import ActionType from './actionType';

import getRockets from '../api';

export function Reserved(rocket) {
  return {
    type: ActionType.RESERVED,
    payload: rocket,
  };
}

export function cancel(rocket) {
  return {
    type: ActionType.CANCELERESERVED,
    payload: rocket,
  };
}

export function rocketfetch(rocket) {
  return {
    type: ActionType.ROCKETLOADED,
    payload: rocket,
  };
}

export const setData = () => async (dispatch) => {
  const url = 'https://api.spacexdata.com/v3/rockets';
  const res = await getRockets(url);
  const rocketData = res.data;

  const rockets = rocketData.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    image: rocket.flickr_images[1],
    reserved: false,
  }));
  dispatch(rocketfetch(rockets));
};
