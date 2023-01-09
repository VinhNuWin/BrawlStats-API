import { useState } from 'react';
import useBrawlerContext from '../hooks/use-brawlers-context';

function BrawlerEdit({ brawler, onSubmit }) {
    const [name, setName] = useState(brawler.name);
    const { editBrawlerById } = useBrawlerContext();

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit();
        editBrawlerById(brawler.id, name);
    };

    return (
    <form onSubmit={handleSubmit} className="book-edit">
        <label>Name</label>
        <input value={name} className="input" onChange={handleChange} />
        <button className="button is-primary">Save</button>
    </form>
    );
}

export default BrawlerEdit;