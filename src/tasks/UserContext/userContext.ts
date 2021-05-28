import { createContext, useContext, useMemo } from "react";

export interface UserContextProps {
	isAuthenticated: boolean

	name?: string
	email?: string
	
	login: (name: string, email: string) => void
}

export const UserContext = createContext<UserContextProps>(undefined as any)

export const useUserContext = () => {
	const ctx = useContext(UserContext)
	if (!ctx) {
		throw new Error("useUserContext must be used inside a UserContextProvider")
	}
	return ctx
}

export const useIsAuthenticated = () => {
	const { isAuthenticated } = useUserContext()
	return useMemo(() => isAuthenticated, [isAuthenticated])
}