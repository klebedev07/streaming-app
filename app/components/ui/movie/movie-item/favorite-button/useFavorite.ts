import { useFavorites } from '@/components/screens/favorites/useFavorites'
import { UserService } from '@/services/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export const useFavorite = (movieId: string) => {
	const [isSmashed, setIsSmashed] = useState(false)

	const { favoriteMovies } = useFavorites()

	useEffect(() => {
		if (!favoriteMovies) return

		const isHasMovie = favoriteMovies.some(f => f._id === movieId)

		if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie)
	}, [favoriteMovies, isSmashed, movieId])

	const queryClient = useQueryClient()

        const { mutate: toggleFavorite } = useMutation({
            mutationKey: ['update favorites'],
            mutationFn: () => UserService.toggleFavorite(movieId),
            onSuccess: () => {
                queryClient.invalidateQueries(['favorite movies'])
            },
          });


          return { isSmashed, toggleFavorite }
}
