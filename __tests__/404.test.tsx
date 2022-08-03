import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from 'src/pages/404';

describe('<404 />', () => {
    it('render 404 Not found page', () => {
      render(<NotFound />);
  
      screen.getByText('404. Page not found.');
    });
});