import Rating from '@/components/ui/movie/movie-item/Rating'
import { IMovie } from '@/shared/types/movie.interface'
import { Entypo } from 'expo-vector-icons'
import { FC } from 'react'
import { Animated, Text, View, StyleSheet } from 'react-native'
import GenreList from '@/components/ui/movie/movie-item/GenreList'

interface IMovieInfo {
	movie: IMovie
}

const MovieInfo: FC<IMovieInfo> = ({ movie }) => {
	return (
		<Animated.View className='px-6 mb-3'>
			<Text
				className='text-5xl font-semibold text-[#F9FCFC] mb-2 pr-2'
				numberOfLines={2}
			>
				{movie.title}
			</Text>
			<View className='mb-4 flex-row items-center opacity-70'>
				<Rating rating={movie.rating} size={18} />
				<Entypo
					name='dot-single'
					size={18}
					color='rgba(255,255,255,.5)'
					style={{
						marginLeft: 4
					}}
				/>
				<Text style={styles.text}>
					{movie.parameters.duration}
				</Text>
				<Entypo
					name='dot-single'
					size={18}
					color='rgba(255,255,255,.5)'
					style={{
						marginLeft: 4
					}}
				/>
				<Text style={styles.text}>
					{movie.parameters.year}
				</Text>
			</View>
            <GenreList genres={movie.genres} />
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	text: {
		color: 'white',
		fontSize: 18,
		marginHorizontal: 4
	}
})

export default MovieInfo
