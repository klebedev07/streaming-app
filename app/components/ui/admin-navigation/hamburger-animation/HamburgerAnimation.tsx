import {FC} from "react";
import {useHamburgerAnimation} from "@/components/ui/admin-navigation/hamburger-animation/useHamburgerAnimation";
import Animated from "react-native-reanimated";

const className = 'w-6 h-0.5 bg-[#ecf0f1]'

const HamburgerAnimation: FC<{ isShow: boolean }> = ({isShow}) => {


    const animation = useHamburgerAnimation(isShow)
    return (
        <Animated.View style={animation.styleAnimation}>
            <Animated.View
                className={className}
                style={animation.transformFirstLineAnimation}>

            </Animated.View>
            <Animated.View
                className={className}
                style={animation.widthSecondLineAnimation}>

            </Animated.View>
            <Animated.View
                className={className}
                style={animation.transformThirdLineAnimation}>

            </Animated.View>

        </Animated.View>
    );
};

export default HamburgerAnimation;