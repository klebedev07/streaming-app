import BlurButton from '@/components/ui/blur-button/BlurButton'
import Rating from '@/components/ui/movie/movie-item/Rating'
import FavoriteButton from '@/components/ui/movie/movie-item/favorite-button/FavoriteButton'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { FC } from 'react'
import { Animated, Text, View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { IMovieProps } from './movie-page.interface'
import { inputRange } from './movie.constant'

const MovieHeader: FC<IMovieProps> = ({ movie, y }) => {
	const { goBack } = useTypedNavigation()
	const { top } = useSafeAreaInsets()

	return (
		<View
			style={{
				marginTop: -top,
				paddingTop: top + 6,
				position: 'absolute',
				left: 0,
				top: 0,
				width: '100%',
				zIndex: 1,
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingHorizontal: 6,
				paddingBottom: 4
			}}
		>
			<Animated.View
				style={{
					...StyleSheet.absoluteFillObject,
					opacity: y.interpolate({
						inputRange,
						outputRange: [0, 0, 1.8]
					}) 
				}}
				className='bg-[#0D0404]'
			/>
			<BlurButton icon={'chevron-left'} iconSize={24} onPress={goBack} />
			<Animated.View className='items-center w-2/3'
			style={{
				opacity: y.interpolate({
					inputRange,
					outputRange: [0, 0, 1.6]
				}) 
			}}>
				<Text className='text-white font-semibold text-2xl mb-0.5 px-2'>
					{movie.title}
				</Text>
				<Rating rating={movie.rating} size={14} />
			</Animated.View>
			<FavoriteButton movieId={movie._id} />
		</View>
	)
}

export default MovieHeader
