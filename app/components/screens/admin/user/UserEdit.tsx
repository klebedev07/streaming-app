import {FC} from 'react'
import {Text, View} from 'react-native'
import {useForm} from "react-hook-form";
import {IUserEditInput} from "@/shared/types/user.interface";

const UserEdit: FC = () => {
    const {control, setValue, handleSubmit} = useForm<IUserEditInput>()
    return (
        <View>
            <Text>
                UserEdit
            </Text>
        </View>
    )
}

export default UserEdit