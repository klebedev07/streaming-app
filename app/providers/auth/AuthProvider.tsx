import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react'
import { View } from 'react-native'
import { IContext, TypeUserState } from './auth-provider.interface'
import * as SplashScreen from 'expo-splash-screen'
import { IUser } from '@/shared/types/user.interface'

export const AuthContext = createContext({} as IContext)

SplashScreen.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>({} as IUser)

	useEffect(() => {
		let mounted = true
		const checkAccessToken = async () => {
			try {
			} catch (error) {
			} finally {
				await SplashScreen.hideAsync()
			}
		}
		checkAccessToken()
		return () => {
			mounted = false
		}
	}, [])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
