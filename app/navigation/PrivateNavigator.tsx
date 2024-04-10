import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React, {FC} from 'react'
import {TypeRootStackParamList} from './navigation.types'
import {useAuth} from '@/hooks/useAuth'
import Screen404 from '@/components/screens/system/Screen404'
import Auth from '@/components/screens/auth/Auth'
import {routes, userRoutes} from './routes'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigator: FC = () => {
    const {user} = useAuth()
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: '#090909'
                }
            }}
        >
            {user ? (
                user.isAdmin ? (
                    routes.map((route) => <Stack.Screen key={route.name} {...route} />)
                ) : (
                    userRoutes.map((route) => <Stack.Screen key={route.name} {...route} />)
                )
            ) : (
                <Stack.Screen name='Auth' component={Auth}/>
            )}
        </Stack.Navigator>
    )
}

export default PrivateNavigator
