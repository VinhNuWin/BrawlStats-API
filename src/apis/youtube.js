import axios from 'axios';

const KEY = 'AIzaSyC_rSwCgoMenZTpGziCW_O8WNQ0f_7yDDM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
