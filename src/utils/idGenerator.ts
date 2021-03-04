let count = 0

export const idGenerator = (prefix: string = "") => {
	return prefix+"_"+(count++)
}