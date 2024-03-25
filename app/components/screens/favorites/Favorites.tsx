import { FC } from 'react'

import { useFavorites } from './useFavorites'
import Loader from '@/components/ui/Loader'
import Layout from '@/components/ui/layout/Layout'
import MovieCatalog from '@/components/ui/movie/catalog/MovieCatalog'

const Favorites: FC = () => {
	const { favoriteMovies, isLoading } = useFavorites()

	if (isLoading) {
		return <Loader />
	}
	return (
		<Layout isHasPadding>
			<MovieCatalog title='Favorites' movies={favoriteMovies} />
		</Layout>
	)
}

export default Favorites
