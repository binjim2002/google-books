import React, { useState } from 'react';

import google from '../../utils/google'



export default function Home() {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const search = (ev) => {
        ev.preventDefault();
        google.search(term,res => {
            setResults(res.result.items)
            
        })
    }
    return (
        <div>
            <form onSubmit={search}>
                <input type="text" onChange={ev => setTerm(ev.target.value)}/>
                <button type="submit">search</button>
            </form>
            <ul>
                {results.map(book => (
                    <li>{book.volumeInfo.title}</li>
                ))}
            </ul>
        </div>
    );
}

