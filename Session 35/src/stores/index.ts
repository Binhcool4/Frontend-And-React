import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import randomNumberReducer from "../slices/randomNumberSlice";
import themeReducer from "../slices/themeSlice";
import viewModeReducer from "../slices/viewModeSlice";
import menuReducer from "../slices/menuSlice";
import languageReducer from "../slices/languageSlice";
import userReducer from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    randomNumber: randomNumberReducer,
    theme: themeReducer,
    viewMode: viewModeReducer,
    menu: menuReducer,
    language: languageReducer,
    user: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;