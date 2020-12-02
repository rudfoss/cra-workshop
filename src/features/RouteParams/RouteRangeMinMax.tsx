import React, { useState } from "react"
import { useRouteMatch } from "react-router-dom"
import RangeInput from "UI/RangeInput"

export const RouteRangeMinMax = (): JSX.Element => {
	const { params } = useRouteMatch<{min: string, max: string}>()
	const [range, setRange] = useState(5)
	return (
		<>
			<pre><code>{`${params.min} <= ${range} >= ${params.max}`}</code></pre>
			<RangeInput
				min={parseInt(params.min)}
				max={parseInt(params.max)}
				label="From Route"
				value={range}
				onChange={setRange}/>
		</>
	)
}

export default RouteRangeMinMax