import { useEffect, useContext } from 'react';
import BrawlerCreate from './components/BrawlerCreate';
import BrawlerList from './components/BrawlerList';
import BrawlersContext from './context/brawlers';

function App() {
    const {fetchBrawlers} = useContext(BrawlersContext);

    useEffect(() => {
        fetchBrawlers();
    }, []);

   

    return (
        <div className="app" >
            <h1>Brawler List</h1>
            <BrawlerList />
            <BrawlerCreate />
        </div>
    );
}

export default App;