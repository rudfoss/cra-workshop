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

export default LoopExample