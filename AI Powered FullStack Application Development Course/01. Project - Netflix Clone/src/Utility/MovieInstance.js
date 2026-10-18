import axios from "axios";

const movieInstance = axios.create({
    baseURL : "https://api.themoviedb.org/3"
})

export {movieInstance}

//--url 'https://api.themoviedb.org/3/account/null/rated/tv?language=en-US&page=1&sort_by=created_at.asc' \