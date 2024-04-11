import { FC } from 'react'
import { View, Text } from 'react-native'
import Layout from "@/components/ui/layout/Layout";
import AdminNavigation from "@/components/ui/admin-navigation/AdminNavigation";

const Admin: FC = () => {
	return (
		<Layout isHasPadding>
			<AdminNavigation title='Statistics' />
		</Layout>
	)
}

export default Admin
