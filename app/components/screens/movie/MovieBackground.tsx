import { IMovie } from '@/shared/types/movie.interface'
import { getMediaSource } from '@/utils/getMediaSource'
import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'
import { Animated, StyleSheet, Text, View, Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface IMovieBackground {
	movie: IMovie
}

const MovieBackground: FC<IMovieBackground> = ({ movie }) => {
	const { top } = useSafeAreaInsets()

	return (
		//TODO
		<Animated.View style={StyleSheet.absoluteFillObject}>
			<Image
				style={StyleSheet.absoluteFill}
				resizeMode='cover'
				source={getMediaSource(movie.poster)}
			/>
			<LinearGradient
				colors={['transparent', 'rgba(0,0,0,0.2)', '#090909']}
				style={StyleSheet.absoluteFill}
				start={[0, 0.3]}
				end={[0, 0.8]}
			/>
		</Animated.View>
	)
}

export default MovieBackground
