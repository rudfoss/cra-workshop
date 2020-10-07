import { waitFor } from "utils/waitFor"

export interface Post {
	userId: number
	id: number
	title: string
	body: string
}

export interface User extends Record<string, any> {
	id: number
	name: string
	username: string
	email: string
}

export const fetchPosts = async () => {
	const response = await fetch("http://jsonplaceholder.typicode.com/posts")
	const posts: Post[] = await response.json()
	await waitFor(2000)
	return posts
}

export const fetchPostsByUser = async (userId: number) => {
	const response = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}/posts`)
	const posts: Post[] = await response.json()
	return posts
}

export const fetchUsers = async () => {
	const response = await fetch("http://jsonplaceholder.typicode.com/users")
	const posts: User[] = await response.json()
	return posts
}