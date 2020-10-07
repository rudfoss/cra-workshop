/**
 * Creates an id generator that will return an id that is unique for this
 * generator and for the duration of the app lifecycle.
 * @param prefix 
 */
export const idGenerator = (
	prefix: string = ""
) => {
	let iterator = 0
	return () => `${prefix}_${iterator++}`
}