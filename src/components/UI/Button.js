const Button = (props) => {
    return (
        <button type={props.type} className={props.className} onClick={props.func}>{props.children}</button>
    )
}
export default Button;