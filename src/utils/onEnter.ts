import React from "react"

export const onEnter = (
	action: () => void
) => (evt: React.KeyboardEvent<any>) => {
	if (evt.key === "Enter") {
		action()
	}
}