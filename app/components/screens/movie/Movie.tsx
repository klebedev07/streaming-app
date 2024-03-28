import { FC } from 'react'
import { Text, View } from 'react-native'
import { useMovie } from './useMovie'
import Loader from '@/components/ui/Loader'
import Layout from '@/components/ui/layout/Layout'
import MovieHeader from './MovieHeader'
import MovieInfo from './MovieInfo'
import MovieBackground from './MovieBackground'

/*

*/

const Movie: FC = () => {
	const { movie, isLoading } = useMovie()

	if (isLoading) return <Loader />
	if (!movie) return null

	return (
		<Layout style={{ paddingTop: 0 }}>
			<MovieHeader movie={movie} />
      <MovieBackground movie={movie}/>
      <MovieInfo movie={movie}/>
		</Layout>
	)
}

export default Movie
