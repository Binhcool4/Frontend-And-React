
import { createStore } from "redux";

export type User = {
	id: number;
	userName: string;
	gender: string;
	dateBirth: string;
	address: string;
};

export type Account = {
	email: string;
	password: string;
};

export type RootState = {
	users: User[];
	counter: number;
	randomNumbers: number[];
	company: string;
	darkMode: boolean;
	account: Account | null;
};

const getInitialDarkMode = () => {
	const saved = localStorage.getItem("darkMode");
	return saved ? JSON.parse(saved) : false;
};

const initialState: RootState = {
	users: [
		{
			id: 1,
			userName: "Nguyễn Văn A",
			gender: "Nam",
			dateBirth: "20/11/2023",
			address: "Thanh Xuân, Hà Nội"
		},
		{
			id: 2,
			userName: "Nguyễn Thị B",
			gender: "Nữ",
			dateBirth: "20/11/2023",
			address: "Cầu Giấy, Hà Nội"
		}
	],
	counter: 0,
	randomNumbers: [],
	company: "Rikkei Academy",
	darkMode: getInitialDarkMode(),
	account: null
};

export type Action = { type: string; payload?: any };

function rootReducer(state: RootState = initialState, action: Action): RootState {
	switch (action.type) {
		case "INCREMENT":
			return { ...state, counter: state.counter + 1 };
		case "DECREMENT":
			return { ...state, counter: state.counter - 1 };
		case "ADD_RANDOM_NUMBER":
			return { ...state, randomNumbers: [...state.randomNumbers, action.payload] };
		case "CHANGE_COMPANY":
			return { ...state, company: action.payload };
		case "TOGGLE_DARK_MODE": {
			const newDarkMode = !state.darkMode;
			localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
			return { ...state, darkMode: newDarkMode };
		}
		case "REGISTER_ACCOUNT":
			return { ...state, account: action.payload };
		default:
			return state;
	}
}

const store = createStore(rootReducer);

export default store;
