import Layout from "@/components/ui/layout/Layout";
import React, {FC} from "react";
import AdminNavigation from "@/components/ui/admin/admin-navigation/AdminNavigation";
import AdminHeader from "@/components/ui/admin/table-header/AdminHeader";
import AdminTable from "@/components/ui/admin/table/AdminTable";
import {useGenres} from "@/components/screens/admin/genres/useGenres";

const GenreList: FC = () => {

    const {
        control,
        isLoading,
        data,
        deleteAsync,
        createAsync
    } = useGenres()

    return (
        <Layout isHasPadding>
            <AdminNavigation title='Genres'/>
            <AdminHeader control={control} onPress={createAsync} />
            <AdminTable
                headerItems={['Name', 'Slug']}
                isLoading={isLoading}
                removeHandler={deleteAsync}
                tableItems={data}/>
        </Layout>
    )
};

export default GenreList;