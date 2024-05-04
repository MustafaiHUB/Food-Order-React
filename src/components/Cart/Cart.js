import React, { useContext } from 'react';
import classes from './Cart.module.css'
import Button from '../UI/Button'
import Modal from '../Modal/Modal';
import MealContext from '../../store/meal-context';
import CartItem from './CartItem';
const Cart = (props) => {
    const mealsContext = useContext(MealContext);
    const cartItemAddHandler = (item) => {
        mealsContext.addItem({ ...item, amount: 1 })
    }
    const cartItemRemoveHandler = (id) => {
        mealsContext.removeItem(id);
    }
    return (
        <Modal onShowModal={props.onShowModal}>
            <ul className={classes['cart-items']}>
                {mealsContext.items.map(item => {
                    return (
                        <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onAdd={cartItemAddHandler.bind(null, item)} onRemove={cartItemRemoveHandler.bind(null, item.id)} />
                    )
                })}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${mealsContext.totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <Button type={"button"} func={props.onShowModal} className={classes['button--alt']}>
                    Close
                </Button>
                {mealsContext.items.length > 0 && <Button type={"button"} func={props.onOrderMeal} className={classes.button}>
                    Order
                </Button>}
            </div>
        </Modal>
    )
}
export default Cart;