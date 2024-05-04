import React from "react";
const MealContext = React.createContext({
    meals: [],
    totalAmount: 0,
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
});
export default MealContext;