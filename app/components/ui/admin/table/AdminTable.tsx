import React, {FC} from 'react'
import {ScrollView, Text, View} from 'react-native'
import {IAdminTable} from "@/components/ui/admin/table/admin-table.interface";
import AdminTableHeader from "@/components/ui/admin/table/AdminTableHeader";
import Loader from "@/components/ui/Loader";
import AdminTableItem from "@/components/ui/admin/table/AdminTableItem";

const AdminTable: FC<IAdminTable> = (
    {
        tableItems = [],
        isLoading,
        headerItems,
        removeHandler

    }) => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <View className='pb-6'>
                <AdminTableHeader headerItems={headerItems} />
                {isLoading ? (
                    <Loader />
                ) : tableItems?.length ? (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {tableItems.map(tableItem => (
                            <AdminTableItem
                                key={tableItem._id}
                                removeHandler={() => removeHandler(tableItem._id)}
                                tableItem={tableItem}
                            />
                        ))}
                    </ScrollView>
                ) : (
                    <Text className='text-white text-lg'>Elements not found</Text>
                )}
            </View>
        </ScrollView>
    )
}

export default AdminTable