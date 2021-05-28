import { useState } from "react"
import { UserContext } from "./userContext"

interface UserContextProviderProps {
	children: React.ReactNode
}

export const UserContextProvider = ({children}: UserContextProviderProps) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [name, setName] = useState<string>()
	const [email, setEmail] = useState<string>()

	const login = (name: string, email: string) => {
		setName(name)
		setEmail(email)
		setIsAuthenticated(true)
	}

	return (
		<UserContext.Provider value={{isAuthenticated, name, email, login}}>
			{children}
		</UserContext.Provider>
	)
}