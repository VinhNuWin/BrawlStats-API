import React from 'react';
import { useState } from 'react';

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState('')

    const handleOnSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    }

    const handleOnChange = (event) => {

        setTerm(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input value={term} onChange={handleOnChange}>
                </input>
            </form>
        </div>
    )
}

export default SearchBar;