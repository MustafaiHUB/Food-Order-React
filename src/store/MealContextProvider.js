import React, { useReducer } from "react";
import DUMMY_MEALS from "../components/Meals/dummy-meals";
import MealContext from "./meal-context";

const defaultState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD_CART_ITEM') {
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item); // returns a new array with the added item
        }
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    } else if (action.type === 'REMOVE_CART_ITEM') {
        const removedItemIndex = state.items.findIndex(item => item.id === action.id);
        const removedItem = state.items[removedItemIndex];
        const updatedAmount = state.totalAmount - removedItem.price;
        let updatedItems;
        if (removedItem.amount > 1) {
            const updatedItem = {
                ...removedItem,
                amount: removedItem.amount - 1
            }
            updatedItems = [...state.items];
            updatedItems[removedItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.filter(item => item.id !== action.id);
        }
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    } else {
        return defaultState;
    }
}
const MealContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);
    const handleAddMeal = (item) => {
        dispatchCartAction({ type: 'ADD_CART_ITEM', item: item })
    }
    const handleRemoveMeal = (id) => {
        dispatchCartAction({ type: 'REMOVE_CART_ITEM', id: id });
    }
    return (
        <MealContext.Provider value={{
            meals: DUMMY_MEALS,
            totalAmount: cartState.totalAmount,
            items: cartState.items,
            addItem: handleAddMeal,
            removeItem: handleRemoveMeal
        }}>
            {props.children}
        </MealContext.Provider>
    )
}
export default MealContextProvider;