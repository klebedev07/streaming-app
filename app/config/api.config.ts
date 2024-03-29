export const SERVER_URL = process.env.SERVER_URL
export const API_URL = `http://127.0.0.1:4200/api`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getUserUrl = (string: string) => `/users${string}`
export const getMoviesUrl = (string: string) => `/movies${string}`
export const getGenresUrl = (string: string) => `/genres${string}`
export const getActorsUrl = (string: string) => `/actors${string}`
