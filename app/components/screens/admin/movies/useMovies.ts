import {useSearchForm} from "@/components/screens/search/useSearchForm";
import {useTypedNavigation} from "@/hooks/useTypedNavigation";
import {useQuery} from "@tanstack/react-query";
import {MovieService} from "@/services/movie.service";
import {ITableItem} from "@/components/ui/admin/table/admin-table.interface";
import {useMutation} from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import {useMemo} from "react";

export const useMovies = () => {
    const {debouncedSearch, control} = useSearchForm()

    const {navigate} = useTypedNavigation()

    const queryData = useQuery({
        queryKey: ['search movie', debouncedSearch],
        queryFn: () => MovieService.getAll(debouncedSearch),
        select: data => data.map((movie): ITableItem => ({
                _id: movie._id,
                editNavigate: () => navigate("MovieEdit", {id: movie._id}),
                items: [movie.title, `${movie.genres[0].name} ${movie.genres.length > 1 ? "..." : ""}`, String(movie.rating)]
            })
        ),
    })


    const {mutateAsync: createAsync} = useMutation({
        mutationKey: ['create movie'],
        mutationFn: (movieId: string) => MovieService.create(),
        onSuccess: async (_id) => {
            Toast.show({
                type: 'success',
                text1: 'Movie created',
                text2: 'Create was successful'
            })
            navigate('MovieEdit', {id: _id})
        }
    })


    const {mutateAsync: deleteAsync} = useMutation({
        mutationKey: ['delete movie'],
        mutationFn: (movieId: string) => MovieService.delete(movieId),
        onSuccess: async () => {
            Toast.show({
                type: 'success',
                text1: 'Movie deleted',
                text2: 'Movie has been deleted successfully'
            })
            await queryData.refetch()
        }
    })

    return useMemo(() => ({...queryData, control, deleteAsync, createAsync}), [queryData, deleteAsync, createAsync]);
}