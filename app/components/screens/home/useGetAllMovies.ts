import { MovieService } from "@/services/movie.service"
import { useQuery } from "@tanstack/react-query"

export const useGetAllMovies = () => {
    const { data: movies, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => MovieService.getAll(),
        select: (data) => data.slice(0, 10) 
	})

    return { movies, isLoading }
}