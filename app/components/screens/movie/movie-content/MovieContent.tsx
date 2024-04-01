import { useScrollToTop } from '@react-navigation/native'
import { FC, useRef } from 'react'
import { Text, View, Animated } from 'react-native'
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated'
import { IMovieProps } from '../movie-page.interface'
import MovieInfo from './MovieInfo'
import ActorCarousel from './ActorCarousel'
import RelatedMovies from './RelatedMovies'
import { HEADER_HEIGHT } from '../movie.constant'
import VideoPlayer from '../VideoPlayer'

const MovieContent: FC<IMovieProps> = ({ movie, y }) => {
	const ref = useRef<ScrollView>(null)
	useScrollToTop(ref) //TODO scrolling

	return (
		<Animated.ScrollView
			ref={ref}
			showsVerticalScrollIndicator={false}
			scrollEventThrottle={16}
			onScroll={Animated.event(
				[
					{
						nativeEvent: { contentOffset: { y } }
					}
				],
				{
					useNativeDriver: true
				}
			)}
			contentContainerStyle={{ paddingTop: HEADER_HEIGHT / 1.3 }}
		>
			<MovieInfo movie={movie} y={y} />
			<View className='bg-[#090909] px-6' pt-1 pb-4>
				<VideoPlayer video={movie.videoUrl} />
				<ActorCarousel actors={movie.actors} />
				<RelatedMovies
					currentMovieId={movie._id}
					genresIds={movie.genres.map(({ _id }) => _id)}
				/>
			</View>
		</Animated.ScrollView>
	)
}

export default MovieContent
