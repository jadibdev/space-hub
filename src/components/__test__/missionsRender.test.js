import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Missions from '../Missions';

it('Missions component renders successfully!', () => {
  const tree = renderer
    .create(<Provider store={store}><Missions /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
