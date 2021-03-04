/**
 * Wraps a state setter so that it can be passed the value of a change event.
 * @param setter 
 */
export const onChangeHelper = (setter: (value: string) => void) => (evt: React.ChangeEvent<HTMLInputElement>) => {
	setter(evt.target.value)
}


// const onChangeHelper = (setter: any) => {
// 	return (evt: React.ChangeEvent<HTMLInputElement>) => {
// 		setter(evt.target.value)
// 	}
// }