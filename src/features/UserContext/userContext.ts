import { createContext, useContext } from "react"

export interface UserContextData {
	name: string
	email: string
}

export const UserContext = createContext<UserContextData>(undefined as any)

export const useUserContext = () => {
	const userData = useContext(UserContext)
	if (userData === undefined) throw new Error(`No provider for "UserContext" detected. Did you forget to add it?`)
	return userData
}