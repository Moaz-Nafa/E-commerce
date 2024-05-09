import { render, screen , fireEvent} from '@testing-library/react';
import DarkMode from './darkMode';
import '@testing-library/jest-dom/extend-expect';

test('renders learn react link', () => {
  render(<DarkMode />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});