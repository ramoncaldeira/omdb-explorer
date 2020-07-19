const API_KEY = process.env.REACT_APP_OMDB_API_KEY || '68b7a486';
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const getMoviesBySearch = async (search, year) => {
  const endpoint = `${BASE_URL}&type=movie&s=${search}${year ? `&y=${year}` : ''}`;
  const response = await fetch(endpoint);
  return response.json();
};

export const getMovieById = async (id) => {
  const response = await fetch(`${BASE_URL}&plot=full&i=${id}`);
  return response.json();
};
