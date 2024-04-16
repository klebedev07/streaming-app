import {FC} from 'react'
import { View} from 'react-native'
import {ISearchFormData} from "@/components/screens/search/search.interface";
import {Control} from "react-hook-form";
import Field from "@/components/ui/form-elements/field/Field";
import AdminCreateButton from "@/components/ui/admin/table-header/AdminCreateButton";

interface IAdminHeader {
    onPress?: () => void
    control: Control<ISearchFormData>
}

const AdminHeader: FC<IAdminHeader> = ({onPress, control}) => {
    return (
        <View className='flex-row items-center justify-between mb-3'>
            <View style={{
                width: onPress ? '82%' : '100%',
            }}>
                <Field control={control} name='searchTerm' keyboardType='web-search'
                       placeholder='Type something to search'/>
            </View>
            {onPress && <AdminCreateButton onPress={onPress}/>}
        </View>
    )
}

export default AdminHeader