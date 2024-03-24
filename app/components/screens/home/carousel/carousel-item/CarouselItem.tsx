import GenreList from '@/components/ui/movie/movie-item/GenreList'
import Rating from '@/components/ui/movie/movie-item/Rating'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { IMovie } from '@/shared/types/movie.interface'
import { getMediaSource } from '@/utils/getMediaSource'
import { FC } from 'react'
import { Pressable, Text, View, Image, Animated } from 'react-native'
import { useItemAnimation } from './useItemAnimation'
import { ITEM_SIZE, SPACING } from '../carousel.constants'

interface ICarouselItem {
	index: number
	scrollX: Animated.Value
	movie: IMovie
}

const CarouselItem: FC<ICarouselItem> = ({ movie, index, scrollX }) => {
	const { navigate } = useTypedNavigation()

	const { rotate, opacity, scale, opacityElements } = useItemAnimation(
		index,
		scrollX
	)

	return (
		<View style={{ width: ITEM_SIZE }}>
			<Animated.View style={{
        padding: SPACING,
        transform: [{ rotate }, { scale }],
        opacity,
      }}
      className={'items-center'}>
				<Pressable className={'w-full relative'} onPress={() => navigate('Movie', { slug: movie.slug })}>
					<Image
						style={{
							height: ITEM_SIZE * 1.3,
							resizeMode: 'cover',
							borderWidth: 1,
							borderColor: 'white'
						}}
						className='w-full rounded-xl mb-2.5'
						source={getMediaSource(movie.poster)}
					/>
				</Pressable>

				<Animated.View className={'items-center'} style={{opacity: opacityElements}}>
					<Rating rating={movie.rating} />
					<Pressable onPress={() => navigate('Movie', { slug: movie.slug })}>
						<Text
							className='text-white text-3xl font-semibold opacity-95 mb-2.5'
							numberOfLines={1}
						>
							{movie.title}
						</Text>
					</Pressable>
					<GenreList genres={movie.genres} />
				</Animated.View>
			</Animated.View>
		</View>
	)
}

export default CarouselItem
