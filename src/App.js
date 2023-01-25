import { createContext, useEffect, useReducer, useState } from "react";
import Header from "./global/Header";
import Home from "./pages/Home";
import Footer from "./global/Footer";

export const cart = [];
const cartContext = createContext();
function App() {
  const reducer = (state, action) => {
    const { id } = action.payload;
    if (action.type === "Buy_Now_Increment") {
      return [...state, action.payload];
    } else if (action.type === "Buy_Now_decrement") {
      return state.filter((current) => current.id !== id);
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, cart);

  useEffect(() => {
    console.log("state change: ", state);
  }, [state]);

  return (
    <>
      <cartContext.Provider value={[state, dispatch]}>
        <Header />
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
