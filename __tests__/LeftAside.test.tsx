import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LeftAside from 'components/LeftAside';

describe('<LeftAside />', () => {
	it('render LeftAside menu', () => {
		render(<LeftAside />);

		screen.getByText('Charge');
		screen.getByText('Charge Log');
	});
});