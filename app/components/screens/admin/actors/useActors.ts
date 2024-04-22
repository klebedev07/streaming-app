import {useSearchForm} from "@/components/screens/search/useSearchForm";
import {useTypedNavigation} from "@/hooks/useTypedNavigation";
import {useQuery} from "@tanstack/react-query";
import {ActorService} from "@/services/actor.service";
import {ITableItem} from "@/components/ui/admin/table/admin-table.interface";
import {useMutation} from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import {useMemo} from "react";

export const useActors = () => {
    const {debouncedSearch, control} = useSearchForm()

    const {navigate} = useTypedNavigation()

    const queryData = useQuery({
        queryKey: ['search actor', debouncedSearch],
        queryFn: () => ActorService.getAll(debouncedSearch),
        select: data => data.map((actor): ITableItem => ({
                _id: actor._id,
                editNavigate: () => navigate("ActorEdit", {id: actor._id}),
                items: [actor.name, String(actor.countMovies)]
            })
        ),
    })


    const {mutateAsync: createAsync} = useMutation({
        mutationKey: ['create actor'],
        mutationFn: (actorId: string) => ActorService.create(),
        onSuccess: async (_id) => {
            Toast.show({
                type: 'success',
                text1: 'Actor created',
                text2: 'Create was successful'
            })
            navigate('ActorEdit', {id: _id})
        }
    })


    const {mutateAsync: deleteAsync} = useMutation({
        mutationKey: ['delete actor'],
        mutationFn: (actorId: string) => ActorService.delete(actorId),
        onSuccess: async () => {
            Toast.show({
                type: 'success',
                text1: 'Actor deleted',
                text2: 'Actor has been deleted successfully'
            })
            await queryData.refetch()
        }
    })

    return useMemo(() => ({...queryData, control, deleteAsync, createAsync}), [queryData, deleteAsync, createAsync]);
}