import Layout from "@/components/ui/layout/Layout";
import AdminNavigation from "@/components/ui/admin-navigation/AdminNavigation";
import {FC} from "react";

export const UserList:FC = () => {
    return (
        <Layout isHasPadding>
            <AdminNavigation title='UserList' />
        </Layout>
    )
};