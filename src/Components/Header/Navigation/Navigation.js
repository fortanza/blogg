// Library
import React from "react";
import classes from './Navigation.module.css'

// Components
import NavigationItem from "./NavigationItem/NavigationItem";

function Navigation () {
    return (
        <ul className={classes.Navigation}>
            <NavigationItem to="/">Acceuil</NavigationItem>
            <NavigationItem to="/articles">Article</NavigationItem>
            <NavigationItem to="/contact">Contact</NavigationItem>
        </ul>
    )
}

export default Navigation;