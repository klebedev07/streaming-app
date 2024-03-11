import {
	EnumAsyncStorage,
	EnumSecureStore,
	IAuthResponse,
	ITokens
} from '@/shared/types/auth.interface'
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const getAccessToken = async () => {
	const accessToken = await getItemAsync(EnumSecureStore.ACCESS_TOKEN)
	return accessToken || null
}

export const saveTokensStorage = async (data: ITokens) => {
	await setItemAsync(EnumSecureStore.ACCESS_TOKEN, data.accessToken)
	await setItemAsync(EnumSecureStore.REFRESH_TOKEN, data.accessToken)
}

export const deleteTokensStorage = async () => {
	await deleteItemAsync(EnumSecureStore.ACCESS_TOKEN)
	await deleteItemAsync(EnumSecureStore.REFRESH_TOKEN)
}

export const getUserFromStorage = async () => {
	try {
		return JSON.parse(
			(await AsyncStorage.getItem(EnumAsyncStorage.USER)) || '{}'
		)
	} catch (error) {
		return null
	}
}

export const saveToStorage = async (data: IAuthResponse) => {
	await saveTokensStorage(data)
	try {
		await AsyncStorage.setItem(EnumAsyncStorage.USER, JSON.stringify(data.user))
	} catch (error) {
		console.log(error)
	}
}
