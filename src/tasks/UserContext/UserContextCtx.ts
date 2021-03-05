import { createContext, useContext } from "react";

export interface UserContextCtxProps {
	name?: string
	email?: string
	login: (name: string, email: string) => unknown
	logout: () => unknown
}

export const UserContextCtx = createContext<UserContextCtxProps>(undefined as any)

export const useUserContext = () => {
	const ctx = useContext(UserContextCtx)
	if (!ctx) {
		throw new Error("useUserContext requires UserContext provided before use")
	}
	return ctx
}