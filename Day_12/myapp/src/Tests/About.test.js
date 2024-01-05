import { render, screen } from '@testing-library/react';
import About from "../Pages/About"

test('rollno', () => {
  render(<About />);
  const linkElement = screen.getByText(/727822TUCS250/i);
  expect(linkElement).toBeInTheDocument();
});