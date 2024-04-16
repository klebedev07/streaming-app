import {FC} from 'react'
import {Text, View} from 'react-native'
import {useTrending} from "@/components/screens/trending/useTrending";
import Loader from "@/components/ui/Loader";
import MovieItem from "@/components/ui/movie/movie-item/MovieItem";

const PopularMovies: FC = () => {

    const {movies, isLoading} = useTrending(2)
    return (
        <View className="text-center w-full border-2 border-gray-500 rounded-2xl p-5 mt-6">
            <Text>
                The most popular movies
            </Text>
            <View className="flex-row justify-between mt-2">
                {isLoading ? <Loader/> : (
                    movies?.length ? movies.map((movie, index) => (
                            <View
                                key={movie._id}
                                style={{
                                    width: '47%'
                                }}
                            >
                                <MovieItem index={index} movie={movie}/>
                                <Text className="text-white text-center mt-2 text-base">
                                    Opened {movie.countOpened} times
                                </Text>
                            </View>
                        ))
                        : <Text className="text-white text-lg">Elements not found</Text>
                )}
            </View>
        </View>
    )
}

export default PopularMovies