import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('app component tests', () => {  

it('renders welcome message', () => {
  render(<App />);
  const testElement = screen.getByTestId('testAppContainer');
  expect(testElement).toBeInTheDocument();
});

});