import {FC} from "react";
import {useTypedNavigation} from "@/hooks/useTypedNavigation";
import {Pressable, Text} from "react-native";
import {MaterialIcons} from "expo-vector-icons";
import {useAuth} from "@/hooks/useAuth";

const AdminButton: FC = () => {

    const {navigate} = useTypedNavigation()
    const {user} = useAuth()

    if(!user?.isAdmin) return null

    return (
        <Pressable
            onPress={() => navigate('Admin')}
            className='bg-[#090909] absolute -right-2.5
        bottom-14 z-10 py-2 px-3.5 rounded-tl-2xl rounded-bl-2xl border-2 border-solid
        border-gray-500'
        >
            <MaterialIcons name='settings-applications' size={32} color='#5D5D5D'/>

        </Pressable>
    );
};

export default AdminButton