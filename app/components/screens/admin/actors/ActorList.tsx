import React, {FC} from "react";
import Layout from "@/components/ui/layout/Layout";
import AdminNavigation from "@/components/ui/admin/admin-navigation/AdminNavigation";
import AdminHeader from "@/components/ui/admin/table-header/AdminHeader";
import AdminTable from "@/components/ui/admin/table/AdminTable";
import {useActors} from "@/components/screens/admin/actors/useActors";

const ActorList: FC = () => {

    const {
        control,
        isLoading,
        data,
        deleteAsync,
        createAsync
    } = useActors()

    return (
        <Layout isHasPadding>
            <AdminNavigation title='Actors'/>
            <AdminHeader control={control} onPress={createAsync} />
            <AdminTable
                headerItems={['Name', 'Count Movies']}
                isLoading={isLoading}
                removeHandler={deleteAsync}
                tableItems={data}/>
        </Layout>
    )
};

export default ActorList;