import { createSlice } from "@reduxjs/toolkit";

interface RandomNumberState {
  numbers: number[];
}

const initialState: RandomNumberState = {
  numbers: [],
};

const randomNumberSlice = createSlice({
  name: "randomNumber",
  initialState,
  reducers: {
    generateRandomNumbers: (state) => {
      const count = Math.floor(Math.random() * 8) + 3;
      const newNumbers: number[] = [];
      for (let i = 0; i < count; i++) {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        newNumbers.push(randomNum);
      }
      
      state.numbers = newNumbers;
    },
  },
});

export const { generateRandomNumbers} = randomNumberSlice.actions;
export default randomNumberSlice.reducer;