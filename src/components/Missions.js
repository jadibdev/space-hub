/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/named
import { getMissions, joinMission, cancelMission } from '../redux/missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);
  const { joinedMissions, reserved } = useSelector((state) => state.missions);

  // let [buttonState, setButtonState] = useState('Join mission');

  const handleClick = (id, e) => {
    if (!joinedMissions.includes(id)) {
      dispatch(joinMission(id));
    } else {
      dispatch(cancelMission(id));
    }
    if (e === 'Join mission') {
      e = 'Cancel mission';
    } else {
      e = 'Join mission';
    }
  };

  /* const changeButton = (statement) => {
    if (statement === 'Join mission') {
      return 'Cancel mission';
    }
    return 'Join mission';
  }; */

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <div>
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
              <td>{joinedMissions.includes(mission.mission_id) ? 'Active member' : 'Not a member'}</td>
              <td>
                {reserved ? <button id={mission.mission_id} type="button" onClick={() => handleClick(mission.mission_id)}>{joinedMissions.includes(mission.mission_id) ? 'Cancel mission' : 'Join mission'}</button>
                  : <button id={mission.mission_id} type="button" onClick={() => handleClick(mission.mission_id, event.target.innerText)}>{joinedMissions.includes(mission.mission_id) ? 'Cancel mission' : 'Join mission'}</button>}
              </td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
