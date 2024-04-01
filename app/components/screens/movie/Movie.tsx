import { FC } from 'react'
import { useMovie } from './useMovie'
import Loader from '@/components/ui/Loader'
import Layout from '@/components/ui/layout/Layout'
import MovieHeader from './MovieHeader'
import MovieBackground from './MovieBackground'
import MovieContent from './movie-content/MovieContent'

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
      <MovieContent movie={movie}/>
		</Layout>
	)
}

export default Movie
