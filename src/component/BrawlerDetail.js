import React from 'react';

const BrawlerDetail = ({ brawler }) => {
    if (!brawler) {
        return <div>Loading...</div>;
    }
    // const videoSrc = `https://www.youtube.com/embed/${brawler.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <h1>Brawler</h1>Brawler
            </div>
        </div>
    );
};

export default BrawlerDetail;