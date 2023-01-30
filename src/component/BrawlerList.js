import React from "react";

const BrawlerList = ({ brawler, onBrawlerSelect }) => {
    return (
        <div onClick={() => onBrawlerSelect(brawler)} />
    )
}

export default BrawlerList;