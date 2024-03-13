import { AuthContext } from "@/providers/auth/AuthProvider";
import { useContext } from "react";

//TODO Прочитать про useContext
export const useAuth = () => useContext(AuthContext);