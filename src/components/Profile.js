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
        if (joinedMissions.includes(mission.mission_id)) {
          return (
            <div key={mission.mission_id}>{mission.mission_name}</div>
          );
        }
      })}
      { joinedMissions.length === 0 ? 'Currently no missions!' : 'Enjoy your mission!'}
    </div>
  );
};

export default Profile;
