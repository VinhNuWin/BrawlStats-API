import React from "react";

const BrawlerItem = ({ brawler, onBrawlerSelect }) => {
    return (
    <div onClick={() => onBrawlerSelect(brawler)} >

    </div>
    );
};

export default BrawlerItem;