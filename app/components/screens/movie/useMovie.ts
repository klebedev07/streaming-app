import { useTypedRoute } from '@/hooks/useTypedRoute'
import { MovieService } from '@/services/movie.service'
import { useQuery } from '@tanstack/react-query'

export const useMovie = () => {
	const { params } = useTypedRoute<'Movie'>()
	const { isLoading, data: movie } = useQuery({
		queryKey: ['get movie by slug', params.slug],
		queryFn: () => MovieService.getBySlug(params.slug)
	})
	return { movie, isLoading }
}
