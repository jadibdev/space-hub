import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Rockets from './components/Rockets';
import Navbar from './components/Navbar';
import Missions from './components/Missions';
import Profile from './components/Profile';
import { setData } from './redux/rocket/rocketaction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setData());
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
