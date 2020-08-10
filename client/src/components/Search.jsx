import React , {useState} from 'react';
import google from '../utils/google';

const Search = ({resultCallback}) => {
    const [term, setTerm] = useState('');
    
    const search = (ev) => {
        ev.preventDefault();
        google.search(term,res => {
            resultCallback(res.result.items)
            
        })
    }
    return (
        <div>
            <form onSubmit={search}>
                <div className="input-group input-inline">
                    <input className="from-input" type="text" onChange={ev => setTerm(ev.target.value)}/>
                    <button className="btn input-group-btn" type="submit">search</button>
                </div>
                
            </form>
        
        </div>
    );
};

export default Search;