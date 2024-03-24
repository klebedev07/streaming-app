import Layout from '@/components/ui/layout/Layout'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { FC } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useGetAllMovies } from './useGetAllMovies'
import Loader from '@/components/ui/Loader'
import Carousel from './carousel/Carousel'

const Home: FC = () => {
	const { navigate } = useTypedNavigation()

	const { movies, isLoading } = useGetAllMovies()

	return (
		<Layout>
			{isLoading ? <Loader /> : movies?.length && <Carousel movies={movies}/>}
		</Layout>
	)
}

export default Home
