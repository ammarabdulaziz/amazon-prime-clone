import { apiKey } from "./constants/constant";

export const latest = `discover/movie?api_key=${apiKey}&with_genres=28`;
export const top = `trending/all/week?api_key=${apiKey}&language=en-US`;
export const action = `discover/movie?api_key=${apiKey}&with_genres=27`;
