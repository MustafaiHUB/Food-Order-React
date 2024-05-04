import React, { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../../UI/Input'
import Button from '../../../UI/Button'
// import MealContext from '../../../../store/meal-context'
const MealItemForm = (props) => {
    // const mealsContext = useContext(MealContext)
    const [amountIsValid, setAmountIsValid] = useState(true);
    const inputAmountRef = useRef();
    const sumitHandler = (e) => {
        e.preventDefault();
        const enteredAmount = inputAmountRef.current.value; // string
        const enteredAmountNumber = +inputAmountRef.current.value; // number

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return
        }

        props.onAddItem(enteredAmountNumber);
    }
    return (
        <form className={`${classes.form}`} onSubmit={sumitHandler}>
            <Input ref={inputAmountRef} label="Amount" input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }} />
            <Button type={"submit"} func={() => { }}>
                <span>+ Add</span>
            </Button>
            {!amountIsValid && <p>Please enter a valid amount!</p>}
        </form>
    )
}
export default MealItemForm