import { useAuth } from '@/hooks/useAuth'
import { UserService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

export const useFavorites = () => {
	const { user } = useAuth()

	const { data: favoriteMovies, isLoading } = useQuery({
		queryKey: ['favorite movies'],
		queryFn: () => UserService.getFavorites(),
        enabled: !!user
	})

	return { favoriteMovies, isLoading }
}
