import React from 'react';
import ReactDOM from 'react-dom';
import MovieDetail from './MovieDetail';

it('MovieDetail component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});