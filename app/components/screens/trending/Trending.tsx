import { FC } from 'react'
import { Text, View } from 'react-native'
import { useTranding } from './useTrending'
import Loader from '@/components/ui/Loader'
import Layout from '@/components/ui/layout/Layout'
import MovieCatalog from '@/components/ui/movie/catalog/MovieCatalog'

const Trending: FC = () => {
	const { isLoading, movies } = useTranding()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			<MovieCatalog title='Trending' movies={movies}
			 description="Trending movies in excellent quality: legal, safe, without ads"/>
		</Layout>
	)
}

export default Trending
