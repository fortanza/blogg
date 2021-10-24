// Library
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classes from './Navigation.module.css'
//Components


function NavigationItem (props) {
    return (
        <li className={classes.NavigationItem}>
            <Link to={props.to} >{props.children}</Link>
        </li>
    )
}

export default NavigationItem;