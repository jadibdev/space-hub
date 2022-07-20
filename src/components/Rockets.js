/* eslint-disable react/jsx-key */
/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';
import './Rockets.css';
import RocketRender from './rocketRender';

const Rockets = () => {
  // const dispatch = useDispatch();
  // const fetchData = async () => {
  //   const res = await axios.get('https://api.spacexdata.com/v3/rockets')
  //     .catch((err) => console.log('error', err));
  //   const list = res.data;
  //   dispatch(setData(list));
  // };
  // useEffect(() => {
  //   fetchData();
  // }, [dispatch]);
  const rock = useSelector((state) => state.rockets);
  console.log(rock);
  return (
    rock.map((item) => (<RocketRender key={item.id} List={item} />))
  );
};
export default Rockets;
