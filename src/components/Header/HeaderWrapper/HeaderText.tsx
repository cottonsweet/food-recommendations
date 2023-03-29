import React from "react"

import classes from "./HeaderText.module.css"

interface Props{
    children?: React.ReactNode;
    className?:string
}

const HeaderText =( props:Props) => {
    return(<div className={`${classes[props.className || ""]}`} >{props.children}</div>)
}

export default HeaderText