import { useState } from 'react';


function BrawlerCreate({ onCreate }) {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(name);
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