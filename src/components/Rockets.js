import React from 'react';
import { useSelector } from 'react-redux';
import './Rockets.css';
import RocketRender from './rocketRender';

const Rockets = () => {
  const rock = useSelector((state) => state.rockets);
  const rocketMap = rock.map((item) => (<RocketRender key={item.id} List={item} />));
  return (
    <div className="all-roket">
      <hr className="hr" />
      {rocketMap}
    </div>
  );
};
export default Rockets;
