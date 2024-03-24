import { TypeRootStackParamList } from "@/navigation/navigation.types";
import { NavigationProp, useNavigation } from "@react-navigation/native";

//TODO разобраться с этим хуком
export const useTypedNavigation = () => useNavigation<NavigationProp<TypeRootStackParamList>>();