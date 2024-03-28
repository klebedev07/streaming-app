import { ComponentType } from "react"

export type TypeRootStackParamList = {
    Auth: undefined
    Home: undefined
    Screen404: undefined
    Trending: undefined
    Search: undefined
    Favorites: undefined
    Profile: undefined
    Movie: {
        slug: string
    }
    Genre: {
        slug: string
    }
    Actor: {
        slug: string
    }
} & TypeRootStackAdminList

export type TypeRootStackAdminList = {
	Admin: undefined
}

export interface Route {
	name: keyof TypeRootStackParamList
    component: ComponentType
	isAdmin?: boolean
}
