import { ComponentType } from "react"

export type TypeRootStackParamList = {
    Auth: undefined
    Home: undefined
    Screen404: undefined

} & TypeRootStackAdminList

export type TypeRootStackAdminList = {
	Admin: undefined
}

export interface Route {
	name: keyof TypeRootStackParamList
    component: ComponentType
	isAdmin?: boolean
}
