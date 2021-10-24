// Library
import React from "react";
import classes from './Layout.module.css'

//Components
import Header from "../../Components/Header/Header";

function Layout(props) {
    return (
        <div>
            {/* En-tête */}
            <Header/>
            {props.children}
            {/* Navigation */}
        </div>
    )
}

/* 
    - Header
        - Logo
        - Navigation
            NavigationItem

*/

export default Layout;