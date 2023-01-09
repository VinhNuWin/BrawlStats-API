import { useContext } from 'react';
import BrawlersContext from '../context/brawlers';

function useBrawlerContext() {
    return useContext(BrawlersContext);
}

export default useBrawlerContext;