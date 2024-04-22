import Layout from "@/components/ui/layout/Layout";
import React, {FC} from "react";
import AdminNavigation from "@/components/ui/admin/admin-navigation/AdminNavigation";
import {useUsers} from "@/components/screens/admin/users/useUsers";
import AdminHeader from "@/components/ui/admin/table-header/AdminHeader";
import AdminTableHeader from "@/components/ui/admin/table/AdminTableHeader";
import AdminTable from "@/components/ui/admin/table/AdminTable";

const UserList: FC = () => {

    const {
        control,
        isLoading,
        data,
        deleteAsync
    } = useUsers()

    return (
        <Layout isHasPadding>
            <AdminNavigation title='Users'/>
            <AdminHeader control={control}/>
            <AdminTable
                headerItems={['Email', 'Date register']}
                isLoading={isLoading}
                removeHandler={deleteAsync}
            tableItems={data}/>
        </Layout>
    )
};

export default UserList;