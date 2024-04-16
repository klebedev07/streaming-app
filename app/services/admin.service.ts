import { request } from '@/services/api/request.api'
import {getUserUrl} from "@/config/api.config";

export const AdminService = {
	async getCountUsers() {
		return request<number>({
			url: getUserUrl('/count'),
			method: 'GET'
		})
	}
}
