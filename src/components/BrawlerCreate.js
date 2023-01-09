import { useState } from 'react';
import useBrawlerContext from '../hooks/use-brawlers-context';

function BrawlerCreate() {
    const [name, setName] = useState('');
    const { createBrawler } = useBrawlerContext();

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createBrawler(name);
        setName('')
    };

    return (
        <div className="book-create" >
            <h3>Add a Brawler</h3>
            <form onSubmit={handleSubmit} >
                <label>Name</label>
                <input className="input" value={name} onChange={handleChange} />
                <button className="button" >Create</button>
            </form>
        </div>
    );
}

export default BrawlerCreate;