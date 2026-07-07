import Counter from "./Counter";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

//! STEP 2: CREATE A SLICE/FEATURE AND EXPORT ALL ACTIONS
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incre: (prevState) => {
      return prevState + 1;
    },
    decre: (prevState) => {
      return prevState > 0 ? prevState - 1 : 0;
    },
  },
});
export const { incre, decre } = counterSlice.actions; // {incre : f , decre: f}

//! STEP 1: CREATE A STORE
const myStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

//! STEP 3: PROVIDE A STORE
const ReduxApp = () => {
  return (
    <div>
      <Provider store={myStore}>
        <Counter />
      </Provider>
    </div>
  );
};

export default ReduxApp;
