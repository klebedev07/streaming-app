import React, { FC } from 'react'
import Layout from "@/components/ui/layout/Layout";
import AdminNavigation from "@/components/ui/admin/admin-navigation/AdminNavigation";

const Admin: FC = () => {
	return (
		<Layout isHasPadding>
			<AdminNavigation title='Statistics' />
		</Layout>
	)
}

export default Admin
