import BrawlerShow from './BrawlerShow';
import useBrawlerContext from '../hooks/use-brawlers-context';

function BrawlerList() {
    const { brawlers } = useBrawlerContext();

    const renderedBrawlers = brawlers.map((brawler) => {
        return (
        <BrawlerShow key={brawler.id} brawler={brawler} />
        );
    });

    return (
        <div className="book-list">
            {renderedBrawlers}
        </div>
    );
}

export default BrawlerList;