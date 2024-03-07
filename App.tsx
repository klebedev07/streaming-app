import Navigation from '@/navigation/Navigation'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
	return (
		<SafeAreaProvider>
			<Navigation />
			<StatusBar style='light' />
		</SafeAreaProvider>
	)
}
