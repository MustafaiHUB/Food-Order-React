import React, { useContext } from "react";
import classes from './MealItem.module.css'
import MealItemForm from "./Form/MealItemForm";
import MealContext from "../../../store/meal-context";
const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    const mealsContext = useContext(MealContext);

    const addMealItemHandler = (amount) => {
        mealsContext.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        })
    }
    return (
        <li className={classes.meal} key={props.id}>
            <div className={``}>
                <h3>{props.name}</h3>
                <p className={`${classes.description}`}>{props.description}</p>
                <span className={`${classes.price}`}>{price}</span>
            </div>
            <MealItemForm onAddItem={addMealItemHandler} name={props.name} price={price} id={props.id} />
        </li>
    )
}
export default MealItem;