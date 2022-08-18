import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Charge from 'pages/charge/Charge';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import item from 'redux/item';

const store = createStore(item);

describe('<Charge />', () => {
    it('render Charge Layouts', () => {
      render(<Provider store={store}><Charge /></Provider>);
  
      screen.getByTestId('ContentsWrapper');
      screen.getByTestId('ContentsBoxWrapper');
      screen.getByTestId('ContentBoxDateTime');
      screen.getByTestId('ContentBoxElectricItems');
      screen.getByTestId('ContentBoxFoodItems');
      screen.getByTestId('ContentsRightBox');
    });
});