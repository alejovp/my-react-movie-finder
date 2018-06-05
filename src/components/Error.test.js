import React from 'react';
import ReactDOM from 'react-dom';
import Error from './Error';

it('Error component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Error />, div);
  ReactDOM.unmountComponentAtNode(div);
});