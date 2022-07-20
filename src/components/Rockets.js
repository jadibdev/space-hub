/* eslint-disable react/jsx-key */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/rocket/rocketaction';
import './Rockets.css';

const Rockets = () => {
  const [buttonText, setButtonText] = useState('Reserved');
  const [btn, setBtn] = useState('btnfirst');
  const [reservedText, setreservedText] = useState('');
  const dispatch = useDispatch();
  const fetchData = async () => {
    const res = await axios.get('https://api.spacexdata.com/v3/rockets')
      .catch((err) => console.log('error', err));
    const list = res.data;
    dispatch(setData(list));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleClick = (e) => {
    console.log(buttonText);
    if (e.target.textContent === 'Reserved') {
      setButtonText('Cancel Reservation');
      setBtn('btnsecond');
      setreservedText('Reserved');
    } else if (e.target.textContent === 'Cancel Reservation') {
      setButtonText('Reserved');
      setBtn('btnfirst');
      setreservedText('');
    }
  };
  const rock = useSelector((state) => state.rocket.rockets);
  const renderList = rock.map((list) => {
    const {
      id, rocket_name, flickr_images, description,
    } = list;
    return (
      <div className="rocket" key={id}>
        <img className="img" src={flickr_images[0]} alt={rocket_name} />
        <div className="rocket-dis">
          <h1>{rocket_name}</h1>
          <div className="pharagraph">
            <p>
              <span className="reservedText">{reservedText}</span>
              {description}
            </p>
          </div>
          <button className={btn} id={id} type="submit" onClick={handleClick}>{buttonText}</button>
        </div>
      </div>
    );
  });
  return (
    <div className="all-roket">
      {renderList}
    </div>
  );
};

export default Rockets;
