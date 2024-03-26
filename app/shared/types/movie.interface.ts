import { IGenre } from "./genre.interface"


interface IActor {
    _id: string
    photo: string
    name: string
    countMovies: number
    slug: string
}


interface IParameters {
    year: number
    duration: number
    country: string
}


export interface IMovie {
    _id: string
    poster: string
    title: string
    parameters: IParameters
    genres: IGenre[]
    actors: IActor[]
    countOpened: number
    videoUrl: string
    rating: number
    slug: string
}


export interface IMovieEditInput extends Omit<IMovie, '_id'> {}
