import { MovieService } from "@/services/movie.service"
import { useQuery } from "@tanstack/react-query"

export const useGetAllMovies = () => {
    const { data: movies, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => MovieService.getAll(),
        select: (data) => data
            .filter(item=> !!item.poster && !!item.slug) // иначе ломается анимация если придет пустое с бэка
            .slice(0, 10)
	})

    return { movies, isLoading }
}