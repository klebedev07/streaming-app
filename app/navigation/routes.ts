import Admin from "@/components/screens/admin/home/Admin";
import Auth from "@/components/screens/auth/Auth";
import Home from "@/components/screens/home/Home";
import Trending from "@/components/screens/trending/Trending";
import Search from "@/components/screens/search/Search";
import Favorites from "@/components/screens/favorites/Favorites";
import Profile from "@/components/screens/profile/Profile";
import {Route} from "@/navigation/navigation.types";

export const routes: Route[] = [
    {
        name: 'Home',
        component: Home,
        isAdmin: false
    },
    {
        name: 'Auth',
        component: Auth,
        isAdmin: false
    },
    {
        name: 'Trending',
        component: Trending,
        isAdmin: false
    },
    {
        name: 'Search',
        component: Search,
        isAdmin: false
    },
    {
        name: 'Favorites',
        component: Favorites,
        isAdmin: false
    },
    {
        name: 'Profile',
        component: Profile,
        isAdmin: false
    },
    {
		name: 'Admin',
		component: Admin,
		isAdmin: true
	}
]