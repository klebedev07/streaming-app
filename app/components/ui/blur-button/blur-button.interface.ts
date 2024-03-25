import { TypeFeatherIconNames } from '@/shared/types/icon.types'
import { PressableProps } from 'react-native'

export interface IBlurButton extends PressableProps {
	className?: string
	icon?: TypeFeatherIconNames
	iconSize?: number
	color?: string
}
