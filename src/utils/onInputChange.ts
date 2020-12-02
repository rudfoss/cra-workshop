import React from "react"

export const onInputChange = (
	onChange: (newValue: string) => void
) => (evt: React.ChangeEvent<HTMLInputElement>) => {
	onChange(evt.target.value)
}

export const onInputNumberChange = (
	onChange: (newValue: number) => void
) => (evt: React.ChangeEvent<HTMLInputElement>) => {
	onChange(parseFloat(evt.target.value))
}