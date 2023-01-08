import { useState } from 'react';
import BrawlerCreate from './components/BrawlerCreate';
import BrawlerList from './components/BrawlerList';


function App() {
    const [brawlers, setBrawlers] = useState([]);

    const editBrawlersById = (id, newName) => {
        const updatedBrawlers = brawlers.map((brawler)=> {
            if (brawler.id === id) {
                return { ...brawler, name: newName };
            }

            return brawler;
        });
        setBrawlers(updatedBrawlers);
    }

    const deleteBrawlerById = (id) => {
        const updatedBrawlers = brawlers.filter((brawler) => {
            return brawler.id !== id;
        });

        setBrawlers(updatedBrawlers);
    };

    const createBrawler = (name) => {
        const updatedBrawler = [...brawlers, { 
            id: Math.round(Math.random() * 9999), 
            name 
        }];
        setBrawlers(updatedBrawler);
    };

    return (
        <div className="app" >
            <h1>Brawler List</h1>
            <BrawlerList onEdit={editBrawlersById} brawlers={brawlers} onDelete={deleteBrawlerById} />
            <BrawlerCreate onCreate={createBrawler}/>
        </div>
    );
}

export default App;