import { MovieService } from '@/services/movie.service'
import { useQuery } from '@tanstack/react-query'

export const useTrending = (limit?: number) => {
	const { data: movies, isLoading } = useQuery({
		queryKey: ['get trending movies'],
		queryFn: () => MovieService.getMostPopularMovies(),
		select: data => (limit ? data.slice(0, limit) : data)
	})

	return { movies, isLoading }
}

