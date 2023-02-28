import { createContext, useReducer } from "react";
import { reducer } from "./../reducer";

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isCartOpen: false,
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.setGoods = (goods) => {
        dispatch({ type: "SET_GOODS", payload: goods });
    };

    value.removeItemFromCart = (id) => {
        dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: { id: id } });
    };

    value.addToCart = (id) => {
        dispatch({ type: "ADD_TO_CART", payload: { id: id } });
    };

    value.handleCartOpen = () => {
        dispatch({ type: "TOGGLE_CART_OPEN" });
    };

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};
