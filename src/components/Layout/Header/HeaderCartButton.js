import React, { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import classes from './HeaderCartButton.module.css'
import Button from "../../UI/Button";
import MealContext from "../../../store/meal-context";
const HeaderCartButton = (props) => {
    const [btnIsHigighted, setBtnIsHigighted] = useState(false);
    const mealsContext = useContext(MealContext);
    const { items } = mealsContext;
    const numberOfTotalItems = items.reduce((curNumber, item) => curNumber + item.amount, 0);
    const btnClasses = `${classes.button} ${btnIsHigighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHigighted(true);

        const timer = setTimeout(() => {
            setBtnIsHigighted(false);
        }, 300)

        return () => {
            clearTimeout(timer);
        }
    }, [items]);
    return (
        <Button type={"button"} className={btnClasses} func={props.onShowModal}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={`${classes.badge}`}>{numberOfTotalItems}</span>
        </Button>
    )
}
export default HeaderCartButton;