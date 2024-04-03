import { useTypedRoute } from '@/hooks/useTypedRoute'
import { MovieService } from '@/services/movie.service'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'

export const useUpdateCountOpened = () => {
	const { params } = useTypedRoute<'Movie'>()

	const { mutate } = useMutation({
		mutationKey: ['update count opened'],
		mutationFn: () => MovieService.updateCountOpened(params.slug)
	})

	useEffect(() => {
		mutate()
	}, [])
}
