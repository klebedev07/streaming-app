import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'
import {
	Platform,
	SafeAreaView,
	StyleProp,
	View,
	ViewStyle
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface ILayout {
	className?: string
	style?: ViewStyle
	isHasPadding?: boolean
}

const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	style,
	className,
	isHasPadding
}) => {
	const { top } = useSafeAreaInsets()

	return (
		<SafeAreaView className='flex-1'>
			<View
				className={clsx('pt-5 flex-1', className, { 'px-6': isHasPadding })}
				style={{
					paddingTop: Platform.OS == 'ios' ? top / 2 : top * 2,
					...style
				}}
			>
				{children}
			</View>
		</SafeAreaView>
	)
}

export default Layout
