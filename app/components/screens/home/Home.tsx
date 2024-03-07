import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { View, Text, Pressable } from 'react-native';

const Home: FC = () => {
    const {navigate} = useTypedNavigation();
    return (
        <View className='mt-10'>
            <Text>Home</Text>
            <Pressable onPress={()=> navigate('Auth')} >
                <Text style={{color: 'white'}}>Press me</Text>   
            </Pressable>
        </View>
    );
};

export default Home;