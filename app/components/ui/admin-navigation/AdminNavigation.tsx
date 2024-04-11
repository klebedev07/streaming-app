import {FC, useEffect, useState} from "react";
import {View} from "react-native";
import Heading from "@/components/ui/heading/Heading";
import BlurButton from "@/components/ui/blur-button/BlurButton";
import {useTypedNavigation} from "@/hooks/useTypedNavigation";
import Animated, {useAnimatedStyle, withSpring} from "react-native-reanimated";
import {BlurView} from "expo-blur";
import {navItems} from "@/components/ui/admin-navigation/admin-navigation.data";
import {AdminNavItem} from "@/components/ui/admin-navigation/AdminNavItem";
import HamburgerAnimation from "@/components/ui/admin-navigation/hamburger-animation/HamburgerAnimation";
import {useIsFocused} from "@react-navigation/native";


interface IAdminNavigation{
    title: string
    isBackButton?: boolean
}

 const AdminNavigation:FC<IAdminNavigation> = ({isBackButton, title}) => {
    const {goBack} = useTypedNavigation()

     const [isShow, setIsShow] = useState(false)

     const translateXAnimation = useAnimatedStyle(()=> ({
         transform: [
             {
                 translateX: withSpring(isShow ? 0: 165, {damping: 11.7})
             }
         ]
     }), [isShow])

     const isFocused = useIsFocused()

     useEffect(()=> {setIsShow(!isFocused)}, [isFocused])

    return (
        <View className="flex-row justify-between items-center z-10 mb-5">
            <Heading title={title}/>
            <View className="relative flex-row">
                {isBackButton && <BlurButton
                icon={'chevron-left'}
                iconSize={24}
                className="w-12 h-12 mr-3"
                onPress={goBack}

                />}
                <BlurButton iconSize={24} className="w-12 h-12" onPress={()=>setIsShow(!isShow)}>
                    <HamburgerAnimation isShow={isShow}/>
                </BlurButton>
                <Animated.View style={translateXAnimation}>
                    <BlurView intensity={50}
                              tint ="dark"
                    className="absolute right-0 top-14 w-36 overflow-hidden rounded-2xl px-3.5 py-2.5">
                        {navItems.map(item=>(
                            <AdminNavItem item={item} key={item.routeName}/>

                        ))}

                    </BlurView>
                </Animated.View>
            </View>
        </View>
    );
};

 export default AdminNavigation