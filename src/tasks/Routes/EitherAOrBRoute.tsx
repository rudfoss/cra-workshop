import { ControlledBigBorder } from "tasks/BigBorder";
import EitherAOrB from "tasks/EitherAOrB";

export const EitherAOrBRoute = () => (
	<EitherAOrB
		a={
			<ControlledBigBorder footer={<p>I am the footer</p>}>
				<h2>This is inside a border</h2>
			</ControlledBigBorder>
		}
		b={<p>Nothing to see here...</p>}/>
)