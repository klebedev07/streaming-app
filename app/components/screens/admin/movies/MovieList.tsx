import Layout from "@/components/ui/layout/Layout";
import React, {FC} from "react";
import AdminNavigation from "@/components/ui/admin/admin-navigation/AdminNavigation";
import AdminHeader from "@/components/ui/admin/table-header/AdminHeader";
import AdminTable from "@/components/ui/admin/table/AdminTable";
import {useMovies} from "@/components/screens/admin/movies/useMovies";

const MovieList: FC = () => {

    const {
        control,
        isLoading,
        data,
        deleteAsync,
        createAsync
    } = useMovies()

    return (
        <Layout isHasPadding>
            <AdminNavigation title='Movies'/>
            <AdminHeader control={control} onPress={createAsync} />
            <AdminTable
                headerItems={['Name', 'Main genre', 'Rating']}
                isLoading={isLoading}
                removeHandler={deleteAsync}
                tableItems={data}/>
        </Layout>
    )
};

export default MovieList;