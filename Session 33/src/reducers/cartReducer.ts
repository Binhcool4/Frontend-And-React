export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export type CartState = CartItem[];

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: CartItem; quantity: number } }
  | { type: 'UPDATE_CART_ITEM'; payload: { id: number; quantity: number } }
  | { type: 'DELETE_CART_ITEM'; payload: { id: number } }
  | { type: 'CLEAR_CART' };

function getInitialCart(): CartState {
  try {
    const data = localStorage.getItem('cart');
    if (data) return JSON.parse(data);
  } catch {}
  return [];
}

export function cartReducer(state: CartState = getInitialCart(), action: CartAction): CartState {
  let newState = state;
  switch (action.type) {
    case 'ADD_TO_CART': {
      const found = state.find(item => item.id === action.payload.product.id);
      if (found) {
        newState = state.map(item =>
          item.id === action.payload.product.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newState = [...state, { ...action.payload.product, quantity: action.payload.quantity }];
      }
      break;
    }
    case 'UPDATE_CART_ITEM':
      newState = state.map(item =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
      break;
    case 'DELETE_CART_ITEM':
      newState = state.filter(item => item.id !== action.payload.id);
      break;
    case 'CLEAR_CART':
      newState = [];
      break;
    default:
      newState = state;
  }
  try {
    localStorage.setItem('cart', JSON.stringify(newState));
  } catch {}
  return newState;
}
