import React from "react"

interface IErrorBoundaryState {
	hasError: boolean
}

export class ErrorBoundary extends React.PureComponent<{}, IErrorBoundaryState> {
	public state: IErrorBoundaryState = {
		hasError: false
	}

	public static getDerivedStateFromError() {
		return {
			hasError: true
		}
	}

	public render() {
		if (this.state.hasError) {
			return (
				<div className="alert alert-danger">Ooops... something did not work correctly. Try reloading the page.</div>
			)
		}
		return this.props.children
	}
}

export default ErrorBoundary
