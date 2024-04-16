import { FC } from 'react'
import { Text, View } from 'react-native'
import CountUsers from "@/components/screens/admin/home/statistics/CountUsers";
import PopularMovies from "@/components/screens/admin/home/statistics/PopularMovies";

const Statistics: FC = () => {
    return (
        <View className='flex-item-stretch'>
            <CountUsers/>
            <PopularMovies/>
        </View>
    )
}

export default Statistics