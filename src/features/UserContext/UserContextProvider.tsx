import { useState } from "react"
import { UserContext, UserData } from "./userContext"

interface UserContextProviderProps {
	children: React.ReactNode
}

export const UserContextProvider = ({children}: UserContextProviderProps): JSX.Element => {
	const [userData, setUserData] = useState<UserData>()

	const login = (userData: UserData) => {
		setUserData(userData)
	}

	return (
	<UserContext.Provider value={{...userData, login}}>
		{children}
	</UserContext.Provider>
)
	}

export default UserContextProvider