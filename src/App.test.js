import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument();
});

test('Check the hello world', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toHaveTextContent("Hello Word");
});
test('Check item in the list', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp1");
  expect(linkElement).toHaveTextContent("Item 1");
});