import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Profile from '../Missions';

it('Profile component renders successfully!', () => {
  const tree = renderer
    .create(<Provider store={store}><Profile /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
