import { Album, fetchAlbums } from "data/albums"
import { useEffect, useState } from "react"

export const AsyncExample = () => {
	const [albums, setAlbums] = useState<Album[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [error, setError] = useState<Error>()

	useEffect(() => {
		let cancelled = false
		const getAlbumData = async () => {
			setIsLoading(true)
			setIsError(false)
			setError(undefined)

			try {
				const data = await fetchAlbums()
				if (cancelled) return
				setAlbums(data)
				setIsLoading(false)
			} catch (error) {
				setIsError(true)
				setError(error)
			}
		}
		getAlbumData()

		return () => {
			cancelled = true
		}
	}, [])

	if (isLoading) {
		return <p>Loading data...</p>
	}

	if (isError) {
		console.error(error)
		return <p>Something went wrong</p>
	}

	if (albums.length === 0) {
		return <p>No albums loaded</p>
	}

	return (
		<ul>
			{albums.map((album) => (
				<li key={album.id}>{album.title}</li>
			))}
		</ul>
	)
}