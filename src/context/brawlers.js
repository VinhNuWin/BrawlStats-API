import { createContext, useState }from 'react';
import axios from 'axios';

const BrawlersContext = createContext();

function Provider({ children }) {
    const [brawlers, setBrawlers] = useState([]);

    const fetchBrawlers = async () => {
        const response = await axios.get('http://localhost:3001/brawlers');

        setBrawlers(response.data);
    };

    const editBrawlersById = async (id, newName) => {
        const response = await axios.put(`http://localhost:3001/brawlers/${id}`, {
            name: newName
        });

        console.log(response);

        const updatedBrawlers = brawlers.map((brawler)=> {
            if (brawler.id === id) {
                return { ...brawler, ...response.data };
            }

            return brawler;
        });
        setBrawlers(updatedBrawlers);
    }

    const deleteBrawlerById = async (id) => {
        await axios.delete(`http://localhost:3001/brawlers/${id}`);

        const updatedBrawlers = brawlers.filter((brawler) => {
            return brawler.id !== id;
        });

        setBrawlers(updatedBrawlers);
    };

    const createBrawler = async (name) => {
        const response = await axios.post('http://localhost:3001/brawlers', {
            name,
        });
    
        const updatedBrawler = [
            ...brawlers,
            response.data
        ];
        setBrawlers(updatedBrawler);

    };

    const valueToShare = {
        brawlers,
        deleteBrawlerById,
        editBrawlersById,
        createBrawler,
        fetchBrawlers,
    };

    return (
        <BrawlersContext.Provider value={valueToShare}>
            {children}
        </BrawlersContext.Provider>
    );

}

export {Provider};
export default BrawlersContext;