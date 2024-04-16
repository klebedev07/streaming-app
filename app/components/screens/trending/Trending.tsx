import { FC } from 'react'
import { useTrending } from './useTrending'
import Loader from '@/components/ui/Loader'
import Layout from '@/components/ui/layout/Layout'
import MovieCatalog from '@/components/ui/movie/catalog/MovieCatalog'

const Trending: FC = () => {
	const { isLoading, movies } = useTrending()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			<MovieCatalog title='Trending' movies={movies}
			 description="Trending movies in excellent quality: legal, safe, without ads"/>
		</Layout>
	)
}

export default Trending
