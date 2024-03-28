import { MovieService } from '@/services/movie.service'
import { useQuery } from '@tanstack/react-query'
import { useSearchForm } from './useSearchForm'


export const useSearch = () => {
	const { searchTerm, debouncedSearch, control } = useSearchForm()
	const { data: movies, isLoading } = useQuery({
		queryKey: ['search movies', debouncedSearch],
		queryFn: () => MovieService.getAll(debouncedSearch),
		select: data => data.slice(0, 10),
        enabled: !!debouncedSearch
	})

	return { movies, isLoading, control, searchTerm }
}
