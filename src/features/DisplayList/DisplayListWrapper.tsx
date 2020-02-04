import React, { useState } from "react"
import DisplayListSearch from "./DisplayListSearch"
import DisplayList from "./DisplayList"

export const DisplayListWrapper: React.FC = () => {
	const [ searchText, setsearchText ] = useState("")
	return (
		<div>
			<DisplayListSearch searchText={searchText} onChange={setsearchText} />
			<DisplayList searchText={searchText} />
		</div>
	)
}

export default DisplayListWrapper
