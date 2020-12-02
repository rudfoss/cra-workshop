import cls from "./Layout.module.css"

interface LayoutProps {
	children: React.ReactNode
	footer: React.ReactNode
}

export const Layout = ({children, footer}: LayoutProps): JSX.Element => (
	<div className={cls.layout}>
		<section className={cls.content}>
			{children}
		</section>
		<footer className={cls.footer}>
			{footer}
		</footer>
	</div>
)

export default Layout