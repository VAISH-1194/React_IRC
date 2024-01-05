import { render, screen } from '@testing-library/react';
import Home from '../Pages/Home';

test('skct', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Sri Krishna College of Technology/i);
  expect(linkElement).toBeInTheDocument();
});
