import React, { FC } from 'react'
import Layout from "@/components/ui/layout/Layout";
import AdminNavigation from "@/components/ui/admin/admin-navigation/AdminNavigation";
import {ScrollView} from "react-native";
import Statistics from "@/components/screens/admin/home/statistics/Statistics";

const Admin: FC = () => {
	return (
		<Layout isHasPadding>
			<AdminNavigation title='Statistics' />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Statistics/>
			</ScrollView>
		</Layout>
	)
}

export default Admin
