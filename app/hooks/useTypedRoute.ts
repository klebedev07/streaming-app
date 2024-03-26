import { TypeRootStackParamList } from "@/navigation/navigation.types";
import { RouteProp, useRoute } from "@react-navigation/native";

export const useTypedRoute = <T extends keyof TypeRootStackParamList>() => useRoute<RouteProp<TypeRootStackParamList, T>>();