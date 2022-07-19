/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import { useSelector } from 'react-redux';

/*
  PROFILE SHOULD SHOW ONLY RESERVED MISSIONS
*/

const Profile = () => {
  const { missions, joinedMissions } = useSelector((state) => state.missions);
  return (
    <div>
      {missions.map((mission) => {
        const placeholder = 'avoid linters';
        return (
          <div key={mission.mission_id}>
            <p>{mission.mission_name}</p>
            <p>{joinedMissions}</p>
            <p>{placeholder}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
