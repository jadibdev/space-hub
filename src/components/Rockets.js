import axios from 'axios';

const Rockets = () => {
  const rocketlist = [
    { name: 'josi', id: 1 },
    { name: 'yoni', id: 2 },
  ];
  const fetchData = async () => {
    const res = await axios.get('https://api.spacexdata.com/v3/rockets')
      .catch((err) => console.log('error', err));
    console.log(res.data);
  };
  fetchData();
  return (
    <div>
      {rocketlist.map((list) => (
        <h1 key={list.id}>{list.name}</h1>
      ))}
    </div>
  );
};

export default Rockets;
