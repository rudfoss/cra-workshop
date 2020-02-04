import React from "react"
import ErrorThrower from "features/ErrorThrower"
import ErrorBoundary from "features/ErrorBoundary"

const App: React.FC = () => {
	return (
		<div>
			<h1>React workshop</h1>
			<ErrorBoundary>
				<ErrorThrower />
			</ErrorBoundary>
		</div>
	)
}

export default App
