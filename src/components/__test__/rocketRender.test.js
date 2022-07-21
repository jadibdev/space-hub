import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import RocketRender from '../rocketRender';
import store from '../../redux/configureStore';

it('To check test is working', () => {
  expect(true).toBe(true);
});

it('Rocket rendering check', () => {
  const list = {
    description: 'The best', name: 'Fal', image: 'https//image1.com', reserved: true,
  };
  const tree = renderer.create(
    <Provider store={store}>
      <RocketRender List={list} />
    </Provider>
    ,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Rocket rendering check', () => {
  const list = {
    description: 'The second besr', name: 'Et24', image: 'https//image2.com', reserved: true,
  };
  const tree = renderer.create(
    <Provider store={store}>
      <RocketRender List={list} />
    </Provider>
    ,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
