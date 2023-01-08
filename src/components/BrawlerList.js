import BrawlerShow from './BrawlerShow';

function BrawlerList({ brawlers, onDelete, onEdit }) {
    const renderedBrawlers = brawlers.map((brawler) => {
        return (
        <BrawlerShow onEdit={onEdit} onDelete={onDelete} key={brawler.id} brawler={brawler} />
        );
    });

    return <div className="book-list">{renderedBrawlers}</div>
}

export default BrawlerList;