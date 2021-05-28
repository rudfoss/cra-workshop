import cls from "./Layout.module.css"

interface LayoutProps {
	nav: React.ReactNode
	footer: React.ReactNode
	children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
	return (
		<>
			<div className={cls.container}>
				<nav className={cls.nav}>
					{props.nav}
				</nav>
				<main className={cls.main}>
					{props.children}
				</main>
			</div>
			<footer className={cls.footer}>
				{props.footer}
			</footer>
		</>
	)
}