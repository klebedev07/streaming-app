import { TypeFeatherIconNames } from '@/shared/types/icon.types'
import { PressableProps, ViewStyle } from 'react-native'

export interface IBlurButton extends PressableProps {
	style?: ViewStyle
	icon?: TypeFeatherIconNames
	iconSize?: number
	color?: string
	isSmall?: boolean
}
