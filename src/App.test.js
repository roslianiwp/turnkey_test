import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('shows correct text', async () => {
  const { container } = render(<App />)
  const word = container.querySelector('input[name="word"]')

  fireEvent.change(word, {
    target: {
      value: 'hello world'
    }
  })

    
  expect(screen.getByTestId('text-content').innerHTML).toBe(' Result 1: HELLO WORLD')
  expect(screen.getByTestId('text-content-flipped').innerHTML).toBe(' Result 2: hElLo wOrLd' )

})
