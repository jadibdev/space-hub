import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);
  console.log(missions);
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <div>
      <h2>
        Title:
        {missions[0].mission_name}
      </h2>
      <p>
        Description:
        {missions[0].description}
      </p>
    </div>
  );
};
export default Missions;
