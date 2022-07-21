/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import './Profile.css';
import { useSelector } from 'react-redux';
import React from 'react';
/*
  PROFILE SHOULD SHOW ONLY RESERVED MISSIONS
*/

const Profile = () => {
  const { missions, joinedMissions } = useSelector((state) => state.missions);
  const rock = useSelector((state) => state.rockets);
  const reservedRocket = rock.filter((book) => book.reserved === true);
  return (
    <div className="profile-container">
      <div>
        <table>
          <thead><tr><th>My Missions</th></tr></thead>
          <tbody>
            <tr>
              <td>
                {missions.map((mission) => {
                  if (joinedMissions.includes(mission.mission_id)) {
                    return (
                      <div key={mission.mission_id}>
                        <h3>{mission.mission_name}</h3>
                        <hr />
                      </div>
                    );
                  }
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table>
          <thead><tr><th>My Rockets</th></tr></thead>
          <tbody>
            <tr>
              <td>
                {
                    reservedRocket.map((rocket) => {
                      const { name } = rocket;
                      return (
                        <div key={name}>
                          <h3>{name}</h3>
                          <hr />
                        </div>
                      );
                    })
                      }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
