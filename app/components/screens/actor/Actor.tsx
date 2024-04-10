import { FC } from 'react'
import { Text, View } from 'react-native'
import {useGenre} from "@/components/screens/genre/useGenre";
import Loader from "@/components/ui/Loader";
import Layout from "@/components/ui/layout/Layout";
import MovieCatalog from "@/components/ui/movie/catalog/MovieCatalog";
import NotFound from "@/components/ui/NotFound";
import {useActor} from "@/components/screens/actor/useActor";

const Actor: FC = () => {
    const { isLoading, movies, actor } = useActor()

    if (isLoading) return <Loader />

    return (
        <Layout isHasPadding>
            {actor ? (
                <MovieCatalog
                    title={actor.name}
                    movies={movies}
                    isBackButton
                />
            ) : (
                <NotFound />
            )}
        </Layout>
    )
}

export default Actor