import React from 'react';

const BrawlerDetail = props => {
    let img = props.brawler.URL;

    let img2 = props.brawler.URL2;

    if (!img){
        return <div>
            <h3>awaiting brawler</h3>
            </div>
    }
    console.log(img);

    return (
            <div className="ml-4">
                <div className="float-tl mt-4 pl-10 pt-10">
                    <img 
                        src={img2}
                        alt="new"
                        className="rounded-mt-0 md:h-auto md:w-auto border-[3px] border-blue bg-blue-900 scale-100"
                        />
                </div>
                <div>
                    <h2 className="pl-10 pt-10 text-5xl font-bold font-kalam text-white">{props.brawler.name}</h2>
                </div>
                <div className="grid md:grid-cols-5 gap-4 px-16 pt-16">
                    <div className="border py-7 px-8 rounded-xl shadow-xl ">
                        <p className="text-2xl text-white font-bold">Damage</p> 
                        <p className="text-white font-bold">{props.brawler.attack}</p>
                    </div>
                    <div className="border py-7 px-8 rounded-xl shadow-xl">
                        <p className="text-2xl text-white font-bold">Health</p> 
                        <p className="text-white font-bold">{props.brawler.health}</p>
                    </div>
                    <div className="border py-7 px-8 rounded-xl shadow-xl">
                        <p className="text-2xl text-white font-bold ">Range</p>
                        <p className="text-white font-bold">{props.brawler.range}</p>
                    </div>
                    <div className="border py-7 px-8 rounded-xl shadow-xl">
                        <p className="text-2xl text-white font-bold">Reload Speed</p>
                        <p className="text-white font-bold">{props.brawler.reload}</p>
                    </div>
                    <div className="border py-7 px-6 rounded-xl shadow-xl">
                        <p className="text-2xl text-white font-bold">Movement Speed</p> 
                        <p className="text-white font-bold">{props.brawler.movement}</p>
                    </div>
                </div>
            </div>

    );
};

export default BrawlerDetail;