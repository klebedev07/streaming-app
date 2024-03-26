import { MovieService } from '@/services/movie.service'
import { useQuery } from '@tanstack/react-query'

export const useTranding = () => {
	const { data: movies, isLoading } = useQuery({
		queryKey: ['get trending movies'],
		queryFn: () => MovieService.getMostPopularMovies()
	})

	return { movies, isLoading }
}
