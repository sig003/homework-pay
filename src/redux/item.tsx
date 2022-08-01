//typescript reference
//https://react.vlpt.us/using-typescript/05-ts-redux.html

interface ActionProps {
  type: string;
  itemName: string;
}

type PayState = {
  item: string[];
}

const initialState: PayState = {
  item: [],
};

const PHONE = 'item/PHONE' as const;
const PC = 'item/PC' as const;
const PRINT = 'item/PRINT' as const;
const LIGHT = 'item/LIGHT' as const;
const REMOVE = 'item/REMOVE' as const;

const COFFEE = 'item/COFFEE' as const;
const DINING = 'item/DINING' as const;
const DESERT = 'item/DESERT' as const;
const DRINK = 'item/DRINK' as const;

export const addPhone = () => ({ type: PHONE });
export const addPc = () => ({ type: PC });
export const addPrint = () => ({ type: PRINT });
export const addLight = () => ({ type: LIGHT });
export const removeItem = (itemName: string) => ({ type: REMOVE, itemName });

export const addCoffee = () => ({ type: COFFEE });
export const addDining = () => ({ type: DINING });
export const addDesert = () => ({ type: DESERT });
export const addDrink = () => ({ type: DRINK });

type PayAction =
  | ReturnType<typeof addPhone>
  | ReturnType<typeof addPc>
  | ReturnType<typeof addPrint>
  | ReturnType<typeof addLight>
  | ReturnType<typeof removeItem>
  | ReturnType<typeof addCoffee>
  | ReturnType<typeof addDining>
  | ReturnType<typeof addDesert>
  | ReturnType<typeof addDrink>
  ;

export default function item(state: PayState = initialState, action: PayAction) {
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
