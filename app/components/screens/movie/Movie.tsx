import { FC, useRef } from 'react'
import { useMovie } from './useMovie'
import Loader from '@/components/ui/Loader'
import Layout from '@/components/ui/layout/Layout'
import MovieHeader from './MovieHeader'
import MovieBackground from './MovieBackground'
import MovieContent from './movie-content/MovieContent'
import { Animated } from 'react-native'
/*

*/

const Movie: FC = () => {
	const y = useRef(new Animated.Value(0)).current //TODO

	const { movie, isLoading } = useMovie()

	if (isLoading) return <Loader />
	if (!movie) return null

	return (
		<Layout style={{ paddingTop: 0 }}>
			<MovieHeader movie={movie} y={y} />
			<MovieBackground movie={movie} y={y} />
			<MovieContent movie={movie} y={y} />
		</Layout>
	)
}

export default Movie
