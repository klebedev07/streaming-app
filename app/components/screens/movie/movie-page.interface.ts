import { IMovie } from "@/shared/types/movie.interface";
import { Animated } from "react-native";

export interface IMovieProps {
	movie: IMovie
    y: Animated.Value
}