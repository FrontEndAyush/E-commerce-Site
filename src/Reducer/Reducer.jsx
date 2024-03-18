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
      localStorage.setItem("value", JSON.stringify(state.value));
    },

    incrementByAmount: (state, action) => {
      state.price = action.payload;
    },

    // this is for the when someone click on the add to cart button
    getId: (state, action) => {
      if (!state.id.includes(action.payload)) state.id.push(action.payload);
      localStorage.setItem("Ids", JSON.stringify(state.id));
    },
    //  this is for the when someone removes a item from the cart
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem("value", JSON.stringify(state.value));
    },
    // this is for the when someone removes the item from the cart
    getFilteredId: (state, action) => {
      state.id = action.payload;

      // local storage goint to update when someone removes items from the cart
      localStorage.setItem("Ids", JSON.stringify(state.id));
    },
    getData: (state, action) => {
      state.product = action.payload;
      let productItems = localStorage.getItem("productItems");
      localStorage.setItem("productItems", JSON.stringify(state.product));

      //  here i set the localStorage data into filterdData array
      state.filteredData = JSON.parse(productItems) || [];
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
  counterDecrement,
} = counterSlice.actions;

export default counterSlice;
