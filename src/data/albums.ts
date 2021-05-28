export interface Album {
	userId: number
	id: number,
	title: string
}

export const fetchAlbums = async (): Promise<Album[]> => {
	await new Promise((resolve) => setTimeout(resolve, 5000))
	const response = await fetch("http://jsonplaceholder.typicode.com/albums")
	if (!response.ok) {
		throw new Error("Something went wrong")
	}

	return response.json()
}