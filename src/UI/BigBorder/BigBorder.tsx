import React from "react"
import classes from "./BigBorder.module.css"

interface BigBorderProps {
	borderSize: number
	children: React.ReactNode
}

export const BigBorder = ({ borderSize, children }: BigBorderProps) => {
	return (<div className={classes.border} style={{borderWidth: borderSize}}>{children}</div>)
}

export default BigBorder