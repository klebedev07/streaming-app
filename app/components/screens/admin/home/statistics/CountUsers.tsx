import {FC} from 'react'
import {Text, View} from 'react-native'
import {useQuery} from "@tanstack/react-query";
import {MovieService} from "@/services/movie.service";
import {AdminService} from "@/services/admin.service";
import {useScaleOnMount} from "@/hooks/useScaleOnMount";
import Loader from "@/components/ui/Loader";
import Animated from 'react-native-reanimated';

const CountUsers: FC = () => {
    const {isLoading, data} = useQuery({
        queryKey: ['get count users'],
        queryFn: () => AdminService.getCountUsers(),
    })

    const {styleAnimation} = useScaleOnMount()

    //TODO style and className wtf&
    return (
        <View className="items-center justify-center text-center w-full border-2 border-gray-500 rounded-2xl p-5">
            {isLoading ? <Loader/> : (
                <Animated.Text
                    className="text-7xl mb-1 font-medium text-white"
                    style={styleAnimation}>
                    {data}

                </Animated.Text>

            )}
            <Animated.Text
                className="opacity-70 text-xl text-white"
                style={styleAnimation}>
                Users
            </Animated.Text>
        </View>
    )
}

export default CountUsers