import React from "react"
import ErrorBoundary from "features/ErrorBoundary"
import ItemList from "features/ItemList"

const App: React.FC = () => {
	return (
		<div>
			<h1>React workshop</h1>
			<ErrorBoundary>
				<ItemList />
			</ErrorBoundary>
		</div>
	)
}

export default App
