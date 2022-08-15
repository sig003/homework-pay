import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChargeDialog from 'components/ChargeDialog';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import item from 'redux/item';

const store = createStore(item);

describe('<ChargeDialog />', () => {
	it('render Receipt', () => {
		render(<Provider store={store}><ChargeDialog open={true} /></Provider>);

		screen.getByText('RECEIPT');
		screen.getByText('Total');
	});
});