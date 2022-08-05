import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from 'components/Layout';

describe('<Layout />', () => {
    it('render Layout component', () => {
      render(<Layout />);

      screen.getByText('HomeworkPay');
    });
});