import React from "react"

const messages = [
	"alpha", // -> alpha mapped
	"bravo", // -> bravo mapped
	"charlie",
	"delta",
	"echo",
	"echo",
	"gecko"
]

export const LoopExample = () => (
	<ul>
		{messages.map((item, idx) => <li key={idx}>{item}</li>)}
	</ul>
)

// export const LoopExample2 = () => {
// 	const messageLi: React.ReactNode[] = []

// 	for (const message of messages) {
// 		messageLi.push(<li key={message}>{message}</li>)
// 	}

// 	return (
// 		<ul>
// 			{messageLi}
// 		</ul>
// 	)
// }

export default LoopExample