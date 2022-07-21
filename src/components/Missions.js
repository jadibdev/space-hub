import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions, joinMission, cancelMission } from '../redux/missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);
  const { joinedMissions, reserved } = useSelector((state) => state.missions);

  const handleClick = (id) => {
    if (!joinedMissions.includes(id)) {
      dispatch(joinMission(id));
    } else {
      dispatch(cancelMission(id));
    }
  };

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td className={joinedMissions.includes(mission.mission_id) ? 'member' : 'non-member'}>{joinedMissions.includes(mission.mission_id) ? 'Active member' : 'Not a member'}</td>
              <td>
                {reserved ? <button className={joinedMissions.includes(mission.mission_id) ? 'cancel' : 'join'} id={mission.mission_id} type="button" onClick={() => handleClick(mission.mission_id)}>{joinedMissions.includes(mission.mission_id) ? 'Cancel mission' : 'Join mission'}</button>
                  : <button className={joinedMissions.includes(mission.mission_id) ? 'cancel' : 'join'} id={mission.mission_id} type="button" onClick={() => handleClick(mission.mission_id)}>{joinedMissions.includes(mission.mission_id) ? 'Cancel mission' : 'Join mission'}</button>}
              </td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
