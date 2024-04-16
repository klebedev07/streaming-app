import {INavItem} from "@/components/ui/admin/admin-navigation/admin-navigation.interface";

export const navItems: INavItem[] = [
    {
        icon: 'multiline-chart',
        title: 'Statistics',
        routeName: 'Admin'
    },
    {
        icon: 'group',
        title: 'Users',
        routeName: 'UserList'
    },
    {
        icon: 'movie-filter',
        title: 'Movies',
        routeName: 'MovieList'
    },
    {
        icon: 'recent-actors',
        title: 'Actors',
        routeName: 'ActorList'
    },
    {
        icon: 'movie-creation',
        title: 'Genres',
        routeName: 'GenreList'
    }
]
