import axios from 'axios';

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params: {
        api_key: "8aaa365c26fff949ebec37c6c3680a3f",
        language: "ko-KR"
    }
});

export default instance;