import React from "react"

interface BigBorderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	/**
	 * The size of the border in pixels.
	 */
	size?: number
	/**
	 * Specify what to create a border around.
	 */
	children: React.ReactNode
}

/**
 * This component creates a big border around the child it is given.
 * 
 * @example
 * ```
 * <BigBorder size={5}>
 * 	<p>I have a border</p>
 * </BigBorder>
 * ```
 */
export const BigBorder = (props: BigBorderProps) => {
	const { size = 5, children, ...rest} = props

	return React.createElement("div", {
		style: {
			border: `${size}px solid hotpink`,
			borderRadius: "5px"
		},
		...rest
	}, children)
	// <div style={{border: `${size}px solid hotpink`, borderRadius: "5px"}} {...rest}>
	// 	{children}
	// </div>
}