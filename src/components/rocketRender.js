/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Reserved, cancel } from '../redux/rocket/rocketaction';

export default function RocketRender({
  List: {
    description, name, image, id,
  },
}) {
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState('Reserve');
  const [btn, setBtn] = useState('btnfirst');
  const [reservedText, setreservedText] = useState('');
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
        <button className={btn} id={id} type="submit" onClick={handleClick}>{buttonText}</button>
      </div>
    </div>
  );
}
