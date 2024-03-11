import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  id: [],
  price: 0,
  product: [],
  isTrue: true,
  filteredData: [],
  filteredDataByCategory: [],
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    incrementByAmount: (state, action) => {
      state.price = action.payload;
    },
    getId: (state, action) => {
      state.id.push(action.payload);
    },
    getFilteredId: (state, action) => {
      state.id = action.payload;
    },
    getData: (state, action) => {
      state.product = action.payload;
      state.filteredData = action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    isTrueMethod: (state, action) => {
      state.isTrue = action.payload;
    },
    getfilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
    getFilterDataByCategory: (state, action) => {
      state.filteredDataByCategory = action.payload;
    },
    counter: (state) => {
      state.counter += 1;
    },
    counterDecrement: (state, action) => {
      state.counter = action.payload;
      console.log(action.payload)
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  getId,
  getData,
  getFilteredId,
  isTrueMethod,
  getfilteredData,
  getFilterDataByCategory,
  counter,
  counterDecrement
} = counterSlice.actions;

export default counterSlice;
