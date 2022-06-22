import axios from 'axios';

const url = 'https://localhost:5000/posts';

export default fetchPosts = () => axios.get(url);