import {FC} from 'react'
import {Text, View} from 'react-native'
import {IAdminTableItem} from "@/components/ui/admin/table/admin-table.interface";
import clsx from "clsx";
import AdminActions from "@/components/ui/admin/table/AdminActions";

const AdminTableItem: FC<IAdminTableItem> = ({tableItem, removeHandler}) => {
    return (
        <View className="flex-row items-center px-3 bg-[#151515] bg-opacity-20 mt-4 rounded-lg">
            {tableItem.items.map((value, index) => (
                <View className={clsx('py-3 w-32 mx-2', {'justify-end': index == tableItem.items.length - 1})}
                      key={value}>
                    <Text className="text-white text-base" numberOfLines={1}>{value}</Text>
                </View>
            ))}
            <AdminActions editNavigate={tableItem.editNavigate} removeHandler={removeHandler}/>
        </View>
    )
}

export default AdminTableItem