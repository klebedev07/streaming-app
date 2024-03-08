import { IUser } from "@/shared/types/user.interface";
import { Dispatch, SetStateAction } from "react";

export type TypeUserState = IUser | null

export interface IContext {
    user: TypeUserState
    setUser: Dispatch<SetStateAction<TypeUserState>>    
}