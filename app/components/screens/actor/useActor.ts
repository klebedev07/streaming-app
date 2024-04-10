import { useTypedRoute } from '@/hooks/useTypedRoute'
import { MovieService } from '@/services/movie.service'
import { useQuery } from '@tanstack/react-query'
import {ActorService} from "@/services/actor.service";

export const useActor = () => {
	const { params } = useTypedRoute<'Actor'>()

	const { data: actor, isLoading } = useQuery({
		queryKey: ['get actor by slug', params.slug],
		queryFn: () => ActorService.getBySlug(params.slug)
	})

	const actorId = actor?._id || ''

	const { data: movies, isLoading: isMovieLoading } = useQuery({
		queryKey: ['get movies by Actor', actorId],
		queryFn: () => MovieService.getByActor(actorId),
		enabled: !!actorId
	})

	return { actor, movies, isLoading: isLoading || isMovieLoading }
}
