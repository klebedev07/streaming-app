import { FC } from 'react'
import { Text, View } from 'react-native'
import { useGenre } from './useGenre'
import Loader from '@/components/ui/Loader'
import Layout from '@/components/ui/layout/Layout'
import MovieCatalog from '@/components/ui/movie/catalog/MovieCatalog'
import NotFound from '@/components/ui/NotFound'

const Genre: FC = () => {
	const { isLoading, movies, genre } = useGenre()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			{genre ? (
				<MovieCatalog
					title={genre.name}
					movies={movies}
					description={genre.description}
                    isBackButton
				/>
			) : (
				<NotFound />
			)}
		</Layout>
	)
}

export default Genre
