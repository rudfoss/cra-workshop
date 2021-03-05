import { useState } from "react"
import { UserContextCtx, UserContextCtxProps } from "./UserContextCtx"

interface UserContextProps {
	children: React.ReactNode
}

type LoginDataState = Pick<UserContextCtxProps, "name" | "email">

export const UserContext = ({children}: UserContextProps) => {
	const [loginData, setLoginData] = useState<LoginDataState>({})
	const login = (name: string, email: string) => {
		setLoginData({
			name,
			email	
		})
	}
	const logout = () => {
		setLoginData({})
	}

	return (
		<UserContextCtx.Provider value={{...loginData, login, logout}}>
			{children}
		</UserContextCtx.Provider>
	)
}

export default UserContext