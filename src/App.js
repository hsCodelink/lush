import { createContext, useReducer, useState } from "react";
import Header from "./global/Header";
import Home from "./pages/Home";
import Footer from "./global/Footer";

const cartContext = createContext();
function App() {
  const initialState = {
    totalItems: 0,
    cart: [],
  };
  const reducer = (state, action) => {
    const { id ,discountPrice} = action.payload;
    if (action.type === "Buy_Now_Increment" && id === action.payload.id) {
      return state + action.payload.qunt;
      
    } else if (
      action.type === "Buy_Now_decrement" &&
      state > 0 &&
      id === action.payload.id
    ) {
      return state - action.payload.qunt;
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <cartContext.Provider value={[state, dispatch]}>
        <Header totalItems={initialState.totalItems} />
        <main>
          <Home />
        </main>
        <Footer />
      </cartContext.Provider>
    </>
  );
}

export default App;
export { cartContext };
