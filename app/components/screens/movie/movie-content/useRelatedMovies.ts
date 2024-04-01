import { MovieService } from "@/services/movie.service";
import { useQuery } from "@tanstack/react-query";

export const useGetRelatedMovies = (genresIds: string[], currentMovieId: string) => useQuery(
    {
        queryKey: ['get related movies by genres', genresIds],
        queryFn: () => MovieService.getByGenres(genresIds),
        select: (data) => data.filter((movie) => movie._id !== currentMovieId).slice(0, 5)
    }
)