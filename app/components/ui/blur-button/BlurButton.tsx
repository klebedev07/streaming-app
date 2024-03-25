import { FC, PropsWithChildren } from 'react'
import { Pressable, View } from 'react-native'
import { IBlurButton } from './blur-button.interface'
import { BlurView } from 'expo-blur'
import clsx from 'clsx'
import { Feather } from 'expo-vector-icons'

const BlurButton: FC<PropsWithChildren<IBlurButton>> = ({
	children,
	color = '#fff',
	icon,
	iconSize = 21,
	className,
	...rest
}) => {
	return (
		<Pressable {...rest}>
			<BlurView
				intensity={22}
				tint='light'
				className={clsx(
					'items-center justify-center overflow-hidden',
					 'w-12 h-12 rounded-2xl'
				)}
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
