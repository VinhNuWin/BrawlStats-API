import axios from 'axios';

const searchBrawler = async (term) => {
    const response = await axios.get(`https://web-production-3295.up.railway.app/brawlers/${term}` , {
        params: {
            q: term
        },
    });
    console.log(response);

    return response;
};

export default searchBrawler;