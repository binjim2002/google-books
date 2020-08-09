import React , {useState} from 'react';

const Search = () => {
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
                <div className="input-group input-inline">
                    <input type="text" onChange={ev => setTerm(ev.target.value)}/>
                </div>
                <button class="btn" type="submit">search</button>
                
            </form>
            
                {results.map(book => (
                    <div className="tile tile-centered">
                        
                        <div className="tile-content">
                        <div className="tile-title">{book.volumeInfo.title}</div>
                            <small className="tile-subtitle text-gray">{'s'}</small>
                        </div>
                        
                    </div>
                  
                ))}
            
        </div>
    );
};

export default Search;