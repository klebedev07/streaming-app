import { FC } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { IMovieCatalog } from './movie-catalog.interface'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import Heading from '../../heading/Heading'
import Description from '../../heading/Description'
import MovieItem from '../movie-item/MovieItem'
import { AntDesign } from 'expo-vector-icons'

const MovieCatalog: FC<IMovieCatalog> = ({
	description,
	isBackButton,
	movies = [],
	title
}) => {
	const { goBack } = useTypedNavigation()

	return (
		<View>
			<View className='flex-row items-center justify-between'>
				<Heading title={title} className='mb-3' />
				{isBackButton && (
					<Pressable onPress={goBack}>
						<AntDesign name="arrowleft" size={32} color="white" />
					</Pressable>
				)}
			</View>

			{description && <Description text={description} />}

			<ScrollView showsVerticalScrollIndicator={false}>
				<View className='flex-row flex-wrap justify-between mt-5 mb-32'>
					{movies?.length ? (
						movies.map((movie, index) => (
							<View className='mb-6' key={movie._id}>
								<MovieItem index={index} movie={movie} style={{ width: 160 }} />
							</View>
						))
					) : (
						<Text className='text-white text-lg'>Elements not found</Text>
					)}
				</View>
			</ScrollView>
		</View>
	)
}

export default MovieCatalog
