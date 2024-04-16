import {useSearchForm} from "@/components/screens/search/useSearchForm";
import {useTypedNavigation} from "@/hooks/useTypedNavigation";
import {useQuery} from "@tanstack/react-query";
import {UserService} from "@/services/user.service";
import {ITableItem} from "@/components/ui/admin/table/admin-table.interface";
import {useMutation} from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import {useMemo} from "react";

export const useUsers = () => {
    const {debouncedSearch, control} = useSearchForm()
    const {navigate} = useTypedNavigation()


    const queryData = useQuery({
        queryKey: ['search user', debouncedSearch],
        queryFn: () => UserService.getAll(debouncedSearch),
        select: data => data.map((user): ITableItem => ({
                _id: user._id,
                editNavigate: () => navigate("UserEdit", {id: user._id}),
                items: [user.email, new Date(user.createdAt).toLocaleDateString()]
            })
        ),
    })


    const {mutateAsync: deleteAsync} = useMutation({
        mutationKey: ['delete user'],
        mutationFn: (userId: string) => UserService.deleteUser(userId),
        onSuccess: async () => {
            Toast.show({
                type: 'success',
                text1: 'User deleted',
                text2: 'User has been deleted successfully'
            })
            await queryData.refetch()
        }
    })

    return useMemo(() => ({...queryData, control, deleteAsync}), [queryData, deleteAsync]);
}