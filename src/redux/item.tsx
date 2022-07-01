interface ActionProps {
  type: string;
  itemName: string;
}

const initialState = {
  item: [],
};

const PHONE = 'item/PHONE';
const PC = 'item/PC';
const PRINT = 'item/PRINT';
const LIGHT = 'item/LIGHT';
const REMOVE = 'item/REMOVE';

const COFFEE = 'item/COFFEE';
const DINING = 'item/DINING';
const DESERT = 'item/DESERT';
const DRINK = 'item/DRINK';

export const addPhone = () => ({ type: PHONE });
export const addPc = () => ({ type: PC });
export const addPrint = () => ({ type: PRINT });
export const addLight = () => ({ type: LIGHT });
export const removeItem = (itemName: string) => ({ type: REMOVE, itemName });

export const addCoffee = () => ({ type: COFFEE });
export const addDining = () => ({ type: DINING });
export const addDesert = () => ({ type: DESERT });
export const addDrink = () => ({ type: DRINK });

export default function item(state = initialState, action: ActionProps) {
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
    case COFFEE:
      const itemArrayFive = [...state.item, 'coffee'];
      return {
        ...state,
        item: [...new Set(itemArrayFive)],
      };
    case DINING:
      const itemArraySix = [...state.item, 'dining'];
      return {
        ...state,
        item: [...new Set(itemArraySix)],
      };
    case DESERT:
      const itemArraySeven = [...state.item, 'desert'];
      return {
        ...state,
        item: [...new Set(itemArraySeven)],
      };
    case DRINK:
      const itemArrayEight = [...state.item, 'drink'];
      return {
        ...state,
        item: [...new Set(itemArrayEight)],
      };
    case REMOVE:
      return {
        ...state,
        item: [...state.item.filter(val => val !== action.itemName)],
      };
    default:
      return state;
  }
}
