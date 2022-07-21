/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Reserved, cancel } from '../redux/rocket/rocketaction';

export default function RocketRender({
  List: {
    description, name, image, id, reserved,
  },
}) {
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState(() => {
    if (reserved === true) {
      return 'Cancel Reservation';
    } if (reserved === false) {
      return 'Reserve';
    }
  });
  const [btn, setBtn] = useState(() => {
    if (reserved === true) {
      return 'btnsecond';
    } if (reserved === false) {
      return 'btnfirst';
    }
  });
  const [reservedText, setreservedText] = useState(() => {
    if (reserved === true) {
      return 'Reserved';
    } if (reserved === false) {
      return '';
    }
  });
  const handleClick = (e) => {
    if (e.target.textContent === 'Reserve') {
      setButtonText('Cancel Reservation');
      setBtn('btnsecond');
      setreservedText('Reserved');
      dispatch(Reserved(e.target.id));
    } else if (e.target.textContent === 'Cancel Reservation') {
      setButtonText('Reserve');
      setBtn('btnfirst');
      setreservedText('');
      dispatch(cancel(e.target.id));
    }
  };
  return (
    <div className="rocket" key={id}>
      <img className="img" src={image} alt={name} />
      <div className="rocket-dis">
        <h1>{name}</h1>
        <div className="pharagraph">
          <p>
            <span className="reservedText">{reservedText}</span>
            {description}
          </p>
        </div>
        <button className={btn} value={reserved} id={id} type="submit" onClick={handleClick}>{buttonText}</button>
      </div>
    </div>
  );
}
