import * as SplashScreen from 'expo-splash-screen'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { TypeUserState } from './auth-provider.interface'
import { AuthContext } from './AuthProvider'

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)

	useEffect(() => {
		let isMounted = true

		const checkAccessToken = async () => {
			try {
				const accessToken = await getAccessToken()

				if (accessToken) {
					const user = await getUserFromStorage()
					if (isMounted) setUser(user)
				}
			} catch {
			} finally {
				await SplashScreen.hideAsync()
			}
		}

		let ignore = checkAccessToken()

		return () => {
			isMounted = false
		}
	}, [])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}
