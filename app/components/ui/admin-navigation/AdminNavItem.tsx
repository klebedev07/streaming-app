import {FC} from "react";
import {INavItem} from "@/components/ui/admin-navigation/admin-navigation.interface";
import {useTypedNavigation} from "@/hooks/useTypedNavigation";
import {useTypedRoute} from "@/hooks/useTypedRoute";
import {Pressable, Text} from "react-native";
import {MaterialIcons} from "expo-vector-icons";
import clsx from "clsx";

export const AdminNavItem: FC<{ item: INavItem }> = ({item}) => {
    const {navigate} = useTypedNavigation()
    const {name} = useTypedRoute()


    return (
        <Pressable
            //@ts-ignore
            onPress={() => navigate(item.routeName)}
            className="flex-row items-center mb-1"
        >
            <MaterialIcons
                name={item.icon}
                size={18}
                color={name === item.routeName ? '#D73033' : '#666'}/>


            <Text
            className={clsx('text-xl text-[#D1D1D1] ml2', {
                'text-[#D73033] font-medium': name === item.routeName,
            })}
            >
                {item.title}
            </Text>

        </Pressable>
    );
};