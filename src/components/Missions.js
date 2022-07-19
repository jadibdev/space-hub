import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/named
import { getMissions, joinMission, cancelMission } from '../redux/missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);
  const { member, joinedMissions, reserved } = useSelector((state) => state.missions);

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
      <p>{joinedMissions}</p>
      <table>
        <thead>
          <tr>
            <th>Item name</th>
            <th>Item description</th>
            <th>Status</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>{member}</td>
              <td>
                {reserved ? <button type="button" onClick={() => handleClick(mission.mission_id)}>Cancel mission</button>
                  : <button type="button" onClick={() => handleClick(mission.mission_id)}>Join mission</button>}
              </td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
