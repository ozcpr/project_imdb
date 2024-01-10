export const apiKey = import.meta.env.REACT_APP_TMDB_API_KEY;
export const baseUrl = 'https://api.themoviedb.org/3';

export const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'accept': 'application/json',
};

export const endpoints = {
    //Movies
    now_playing: 'movie/now_playing',
    top_rated: 'movie/top_rated',
    popular: 'movie/popular',
    upcoming: 'movie/upcoming',
    //Tv
    airing_today: 'tv/airing_today',
    on_the_air: 'tv/on_the_air',
    popularTv: 'tv/popular',
    top_ratedTv: 'tv/top_rated',



}
