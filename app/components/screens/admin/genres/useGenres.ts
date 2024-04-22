import {useSearchForm} from "@/components/screens/search/useSearchForm";
import {useTypedNavigation} from "@/hooks/useTypedNavigation";
import {useQuery} from "@tanstack/react-query";
import {GenreService} from "@/services/genre.service";
import {ITableItem} from "@/components/ui/admin/table/admin-table.interface";
import {useMutation} from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import {useMemo} from "react";

export const useGenres = () => {
    const {debouncedSearch, control} = useSearchForm()

    const {navigate} = useTypedNavigation()

    const queryData = useQuery({
        queryKey: ['search genre', debouncedSearch],
        queryFn: () => GenreService.getAll(debouncedSearch),
        select: data => data.map((genre): ITableItem => ({
                _id: genre._id,
                editNavigate: () => navigate("GenreEdit", {id: genre._id}),
                items: [genre.name, genre.slug]
            })
        ),
    })


    const {mutateAsync: createAsync} = useMutation({
        mutationKey: ['create genre'],
        mutationFn: (genreId: string) => GenreService.create(),
        onSuccess: async (_id) => {
            Toast.show({
                type: 'success',
                text1: 'Genre created',
                text2: 'Create was successful'
            })
            navigate('GenreEdit', {id: _id})
        }
    })


    const {mutateAsync: deleteAsync} = useMutation({
        mutationKey: ['delete genre'],
        mutationFn: (genreId: string) => GenreService.delete(genreId),
        onSuccess: async () => {
            Toast.show({
                type: 'success',
                text1: 'Genre deleted',
                text2: 'Genre has been deleted successfully'
            })
            await queryData.refetch()
        }
    })

    return useMemo(() => ({...queryData, control, deleteAsync, createAsync}), [queryData, deleteAsync, createAsync]);
}