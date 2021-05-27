export const idGenerator = (prefix: string = "id_") => {
	let iterator = 0
	return () => {
		return `${prefix}${iterator++}`
	}
}