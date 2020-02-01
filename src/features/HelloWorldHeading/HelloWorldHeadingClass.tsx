import React from "react"

interface IHelloWorldHeadingClassState {
	showHeading: boolean
}

export class HelloWorldHeadingClass extends React.PureComponent<any, IHelloWorldHeadingClassState> {
	public state: IHelloWorldHeadingClassState = {
		showHeading: false
	}

	render() {
		return (
			<div>
				<h1>{this.state.showHeading && "Hello World"}</h1>
				<button type="button" onClick={() => this.setState({ showHeading: !this.state.showHeading })}>
					Click me
				</button>
			</div>
		)
	}
}

export default HelloWorldHeadingClass
