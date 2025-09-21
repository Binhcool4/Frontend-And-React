import { createStore, combineReducers } from 'redux';

export interface AccountState {
  email: string;
  password: string;
}

const initialState: AccountState = {
  email: '',
  password: '',
};

const REGISTER_ACCOUNT = 'REGISTER_ACCOUNT';
const CLEAR_ACCOUNT = 'CLEAR_ACCOUNT';

export const registerAccount = (email: string, password: string) => ({
  type: REGISTER_ACCOUNT,
  payload: { email, password },
});

export const clearAccount = () => ({
  type: CLEAR_ACCOUNT,
});

// Reducer
function accountReducer(state = initialState, action: any): AccountState {
  switch (action.type) {
    case REGISTER_ACCOUNT:
      return {
        email: action.payload.email,
        password: action.payload.password,
      };
    case CLEAR_ACCOUNT:
      return { ...initialState };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
