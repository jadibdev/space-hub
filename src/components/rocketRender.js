import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
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
    }
    return 'Reserve Rocket';
  });
  const [btn, setBtn] = useState(() => {
    if (reserved === true) {
      return 'btnsecond';
    }
    return 'btnfirst';
  });
  const [reservedText, setreservedText] = useState(() => {
    if (reserved === true) {
      return 'Reserved';
    }
    return '';
  });
  const handleClick = (e) => {
    if (e.target.textContent === 'Reserve Rocket') {
      setButtonText('Cancel Reservation');
      setBtn('btnsecond');
      setreservedText('Reserved');
      dispatch(Reserved(e.target.id));
    } else if (e.target.textContent === 'Cancel Reservation') {
      setButtonText('Reserve Rocket');
      setBtn('btnfirst');
      setreservedText('');
      dispatch(cancel(e.target.id));
    }
  };
  return (
    <div data-testid={id} className="rocket" key={id}>
      <img className="img" src={image} alt={name} />
      <div className="rocket-dis">
        <h1 className="rocket-name">{name}</h1>
        <div className="pharagraph">
          <p>
            <span className="reservedText">{reservedText}</span>
            <span className="description">{description}</span>
          </p>
        </div>
        <button className={btn} value={reserved} id={id} type="submit" onClick={handleClick}>{buttonText}</button>
      </div>
    </div>
  );
}

RocketRender.propTypes = {
  List: PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
    reserved: PropTypes.bool,
    image: PropTypes.string,
  }),
};

RocketRender.defaultProps = {
  List: 'list',
};
