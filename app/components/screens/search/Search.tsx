import { FC } from 'react'
import { Text, View } from 'react-native'
import { useSearch } from './useSearch'
import Layout from '@/components/ui/layout/Layout'
import Heading from '@/components/ui/heading/Heading'
import Field from '@/components/ui/form-elements/field/Field'
import { ISearchFormData } from './search.interface'
import Loader from '@/components/ui/Loader'
import MovieCatalog from '@/components/ui/movie/catalog/MovieCatalog'

const Search: FC = () => {
	const { searchTerm, movies, isLoading, control } = useSearch()

	return (
		<Layout isHasPadding>
			<Heading title='Search' />
			<View className='mt-3'>
				<Field<ISearchFormData>
					placeholder='Type something...'
					control={control}
					name='searchTerm'
					rules={{
						required: 'Search term is required!'
					}}
					keyboardType='web-search'
				/>
			</View>
			{!!searchTerm ? (
				<View className='mt-3'>
					{isLoading ? (
						<Loader />
					) : (
						<MovieCatalog title='Search results' movies={movies} />
					)}
				</View>
			) : null}
		</Layout>
	)
}

export default Search
