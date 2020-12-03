import cls from "./BigBorder.module.css"

interface BigBorderProps {
	children: React.ReactNode
}

export const BigBorder = ({children}: BigBorderProps): JSX.Element => {
	return (
		<div className={cls.border}>
			{children}
		</div>
	)
}

export default BigBorder