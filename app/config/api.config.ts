export const SERVER_URL = 'http://192.168.3.3:4200'
export const API_URL = `http://192.168.3.3:4200/api`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getUserUrl = (string: string) => `/users${string}`
export const getMoviesUrl = (string: string) => `/movies${string}`
export const getGenresUrl = (string: string) => `/genres${string}`
export const getActorsUrl = (string: string) => `/actors${string}`
