import * as React from 'react';
import CCForm from './index';
const renderer = require('react-test-renderer');

it('renders correctly', () => {
  const tree = renderer
    .create(<CCForm/>) 
    .toJSON();
  expect(tree).toMatchSnapshot();
});