import { useScrollToTop } from '@react-navigation/native'
import { FC, useRef } from 'react'
import { Text, View, Animated } from 'react-native'
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated'
import { IMovieProps } from '../movie-page.interface'
import MovieInfo from './MovieInfo'
import ActorCarousel from './ActorCarousel'
import RelatedMovies from './RelatedMovies'

const MovieContent: FC<IMovieProps> = ({ movie }) => {
	const ref = useRef<ScrollView>(null)
	useScrollToTop(ref)

	return (
		<Animated.ScrollView
			ref={ref}
			showsVerticalScrollIndicator={false}
			scrollEventThrottle={16}
		>
			<MovieInfo movie={movie} />
			<View className='bg-[#090909] px-6' pt-1 pb-4>
				<ActorCarousel actors={movie.actors} />
				<RelatedMovies currentMovieId={movie._id} genresIds={movie.genres.map(({_id}) => _id)} />
			</View>
		</Animated.ScrollView>
	)
}

export default MovieContent
