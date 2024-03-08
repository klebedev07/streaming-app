import { FC, PropsWithChildren } from 'react'
import { View, Text, Pressable } from 'react-native'
import { IButton } from './button.interface'
import clsx from 'clsx'
import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from 'expo-vector-icons'

const Button: FC<PropsWithChildren<IButton>> = ({
	className,
	icon,
	children,
     ...rest
}) => {
	return (
		<Pressable className={clsx('self-center mt-3.5', className)} {...rest}>
			<LinearGradient
			start={{ x: 0, y: 0.75 }}
			end={{ x: 1, y: 0.25 }}
				className={clsx('w-full py-3 px-8 rounded-2xl items-center', {
					'flex-row': !!icon
				})}
				colors={['#DC3F41', '#a6282b']}
			>
                {icon && <Feather name={icon} size={18} color='white' />}
				<Text
					className={clsx('text-white text-center font-medium text-lg', {
						'ml-2': !!icon
					})}
				>
					{children}
				</Text>
			</LinearGradient>
		</Pressable>
	)
}

export default Button
