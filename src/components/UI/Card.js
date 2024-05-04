import cardClasses from '../UI/Card.module.css'
const Card = (props) => {
    return (
        <div className={cardClasses.card} key={`${Math.random()}`}>{props.children}</div>
    )
}
export default Card;