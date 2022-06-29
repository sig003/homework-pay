const initialState = {
  item: [],
};

const PHONE = 'item/PHONE';
const PC = 'item/PC';
const PRINT = 'item/PRINT';
const LIGHT = 'item/LIGHT';
const REMOVE = 'item/REMOVE';

export const addPhone = () => ({ type: PHONE });
export const addPc = () => ({ type: PC });
export const addPrint = () => ({ type: PRINT });
export const addLight = () => ({ type: LIGHT });
export const removeItem = itemName => ({ type: REMOVE, itemName });

export default function item(state = initialState, action) {
  switch (action.type) {
    case PHONE:
      const itemArrayOne = [...state.item, 'phone'];
      return {
        ...state,
        item: [...new Set(itemArrayOne)],
      };
    case PC:
      const itemArrayTwo = [...state.item, 'pc'];
      return {
        ...state,
        item: [...new Set(itemArrayTwo)],
      };
    case PRINT:
      const itemArrayThree = [...state.item, 'print'];
      return {
        ...state,
        item: [...new Set(itemArrayThree)],
      };
    case LIGHT:
      const itemArrayFour = [...state.item, 'light'];
      return {
        ...state,
        item: [...new Set(itemArrayFour)],
      };
    case REMOVE:
      const removeItemArray = [
        ...state.item.filter(val => val !== action.itemName),
      ];
      return {
        ...state,
        item: [...removeItemArray],
      };
    default:
      return state;
  }
}
