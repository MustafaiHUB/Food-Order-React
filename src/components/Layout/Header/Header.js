import classes from "./Header.module.css"
import React from "react";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return (
        <header className={`${classes.header}`}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onShowModal={props.onShowModal} />
        </header>
    )
}
export default Header;