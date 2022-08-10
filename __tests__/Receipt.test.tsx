import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Receipt from 'components/Receipt';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import item from 'redux/item';

const store = createStore(item);

describe('<Receipt />', () => {
	it('render Receipt', () => {
		render(<Provider store={store}><Receipt /></Provider>);

		screen.getByText('RECEIPT');
		screen.getByText('Total');
        screen.getByText('Charge');
	});
});