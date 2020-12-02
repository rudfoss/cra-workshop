import React from "react"
import { UserContext, UserContextData } from "./userContext"

interface UserContextProviderProps {
	userContextData: UserContextData
	children: React.ReactNode
}

export const UserContextProvider = ({userContextData, children}: UserContextProviderProps): JSX.Element => (
	<UserContext.Provider value={userContextData}>
		{children}
	</UserContext.Provider>
)

export default UserContextProvider