import classes from "./Layout.module.css"

interface LayoutProps {
	nav: React.ReactNode
	children: React.ReactNode
	footer: React.ReactNode
}

export const Layout = ({nav, children, footer}: LayoutProps) => (
	<div className={classes.container}>
		<main>
			<nav>
				{nav}
			</nav>
			<section className={classes.content}>
				{children}
			</section>
		</main>
		<footer>
			{footer}
		</footer>
	</div>
)

export default Layout