/* eslint-disable react/jsx-key */
/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';
import './Rockets.css';
import RocketRender from './rocketRender';

const Rockets = () => {
  const rock = useSelector((state) => state.rockets);
  return (
    rock.map((item) => (<RocketRender key={item.id} List={item} />))
  );
};
export default Rockets;
