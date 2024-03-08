import { adminRoutes } from "./admin.routes";
import { userRoutes } from "./user.route";

export const routes = [
    ...userRoutes, ...adminRoutes
]