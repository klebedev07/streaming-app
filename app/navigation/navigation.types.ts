import {ComponentType} from "react"

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
    UserEdit: { id: string }
    MovieEdit: {id: string}
    GenreEdit: {id: string}
    ActorEdit: {id: string}
    UserList: undefined
    MovieList: undefined
    GenreList: undefined
    ActorList: undefined
}

export interface Route {
    name: keyof TypeRootStackParamList
    component: ComponentType
    isAdmin?: boolean
}
