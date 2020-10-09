import { createContext, useContext } from "react"

export interface UserContextData {
	name: string
	email: string
}

export const UserContext = createContext<UserContextData>(undefined as any)

export const useUserContext = () => useContext(UserContext)