import { FC, PropsWithChildren } from 'react'
import { Pressable, View } from 'react-native'
import { IBlurButton } from './blur-button.interface'
import { BlurView } from 'expo-blur'
import clsx from 'clsx'
import { Feather } from 'expo-vector-icons'

const BlurButton: FC<PropsWithChildren<IBlurButton>> = ({
	children,
	color = '#fff',
	iconSize = 21,
	style,
	isSmall = false,
	icon,
	...rest
}) => {
	return (
		<Pressable {...rest}>
			<BlurView
				intensity={22}
				tint='light'
				className={clsx(
					'items-center justify-center overflow-hidden',
					isSmall ? 'w-8 h-8 rounded-lg' : 'w-12 h-12 rounded-2xl'
				)}
				style={style}
			>
				{children ? (
					children
				) : (
					<Feather name={icon} size={iconSize} color={color} />
				)}
			</BlurView>
		</Pressable>
	)
}

export default BlurButton
