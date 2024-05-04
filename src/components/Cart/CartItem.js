import classes from './CartItem.module.css';
import Button from '../UI/Button';
const CartItem = (props) => {
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.price.toFixed(2)}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <Button type={"button"} func={props.onRemove}>-</Button>
        <Button type={"button"} func={props.onAdd}>+</Button>
      </div>
    </li>
  )
};

export default CartItem;
