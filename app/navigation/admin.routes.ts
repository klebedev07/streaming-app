import Admin from '@/components/screens/admin/home/Admin'
import { Route } from './navigation.types'

export const adminRoutes: Route[] = [
	{
		name: 'Admin',
		component: Admin,
		isAdmin: true
	}
]
