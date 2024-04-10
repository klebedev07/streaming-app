import Admin from '@/components/screens/admin/home/Admin'
import Home from '@/components/screens/home/Home'
import Trending from '@/components/screens/trending/Trending'
import Search from '@/components/screens/search/Search'
import Favorites from '@/components/screens/favorites/Favorites'
import Profile from '@/components/screens/profile/Profile'
import { Route } from '@/navigation/navigation.types'
import Genre from '@/components/screens/genre/Genre'
import Movie from '@/components/screens/movie/Movie'
import Actor from '@/components/screens/actor/Actor'
import ActorEdit from "@/components/screens/admin/actor/ActorEdit";
import ActorList from "@/components/screens/admin/actors/ActorList";
import {GenreEdit} from "@/components/screens/admin/genre/GenreEdit";
import {MovieEdit} from "@/components/screens/admin/movie/MovieEdit";
import {UserEdit} from "@/components/screens/admin/user/UserEdit";
import {UserList} from "@/components/screens/admin/users/UserList";
import GenreList from "@/components/screens/admin/genres/GenreList";
import {MovieList} from "@/components/screens/admin/movies/MovieList";

export const userRoutes: Route[] = [
	{
		name: 'Home',
		component: Home,
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
		name: 'Genre',
		component: Genre,
		isAdmin: false
	},
	{
		name: 'Actor',
		component: Actor,
		isAdmin: false
	},
	{
		name: 'Movie',
		component: Movie,
		isAdmin: false
	},


]

export const adminRoutes: Route[] = [
	{
		name: 'Admin',
		component: Admin,
		isAdmin: true
	},
	{
		name: 'ActorEdit',
		component: ActorEdit,
		isAdmin: true
	},
	{
		name: 'ActorList',
		component: ActorList,
		isAdmin: true
	},
	{
		name: 'GenreEdit',
		component: GenreEdit,
		isAdmin: true
	},
	{
		name: 'GenreList',
		component: GenreList,
		isAdmin: true
	},
	{
		name: 'MovieEdit',
		component: MovieEdit,
		isAdmin: true
	},
	{
		name: 'MovieList',
		component: MovieList,
		isAdmin: true
	},
	{
		name: 'UserEdit',
		component: UserEdit,
		isAdmin: true
	},
	{
		name: 'UserList',
		component: UserList,
		isAdmin: true
	}


]

export const routes = [...userRoutes, ...adminRoutes]

