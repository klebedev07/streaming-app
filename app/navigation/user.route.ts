import Home from "@/components/screens/home/Home";
import { Route } from "./navigation.types";
import Auth from "@/components/screens/auth/Auth";

export const userRoutes: Route[] = [  
    // {
    //     name: 'Home',
    //     component: Home,
    //     isAdmin: false
    // },
    {
        name: 'Auth',
        component: Auth,
        isAdmin: false
    }
]