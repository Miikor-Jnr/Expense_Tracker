import { render, screen } from '@testing-library/react';
import GradeCalc from '../../grade/src/App';

test('renders learn react link', () => {
  render(<GradeCalc />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
