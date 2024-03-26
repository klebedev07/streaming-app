import { useEffect } from 'react'
import { ViewStyle } from 'react-native'
import {
    Easing,
	useAnimatedStyle,
	useSharedValue,
	withDelay,
	withTiming
} from 'react-native-reanimated'

export const useMovieItemAnimation = (index: number, style?: ViewStyle) => {
	const scale = useSharedValue(0.4)
	const opacity = useSharedValue(0)

	useEffect(() => {
		scale.value = withDelay(
			100 + index * 260,
			withTiming(1, {
				duration: 600,
				easing: Easing.bezier(0.5, 0.3, 0.5, 1)
			})
		)
		opacity.value = withDelay(
			100 + index * 260,
			withTiming(10, {
				duration: 600,
				easing: Easing.bezier(0.5, 0.3, 0.5, 1)
			})
		)

        return () => {
            scale.value = withTiming(0.4)
			opacity.value = withTiming(0)
        
        }
	}, [])

	const styleAnimation = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }],
		opacity: opacity.value,
		...style
	}))

	return { styleAnimation }
}
