import React, {useState} from "react";

import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
    const [results, setResults] = useState([]);
    const saveBook = book => {
        let books = localStorage.getItem('my_books');
        if(books){
            books = [...JSON.parse(books),book]
        } else {
            books = [book];
        }
        console.log(books)
        localStorage.setItem('my_books', JSON.stringify(books));
        window.location.reload();
    }
  return (
    <div className="columns">
      <div className="column col-12" style={{padding: '12px'}}>
        <header className="navbar">
          <section className="navbar-section">
            <Link to="/">
              <span className="navbar-brand mr-2">Google Books</span>
            </Link>
            <Link to="/auth">
              <span className="btn btn-link">Connect</span>
            </Link>
          </section>
          <section className="navbar-section">
            <Search resultCallback={setResults}/>
          </section>
        </header>
        {results.map((book,i) => (
                    <div key={i} className="tile tile-centered">
                        <div className="tile-icon">
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt="img"/>
                        </div>
                        
                        <div className="tile-content">
                            <div className="tile-title">{book.volumeInfo.title}</div>
                            <small className="tile-subtitle text-gray">{book.volumeInfo.authors[0]}</small>
                            <div className="tile-subtitle">{book.volumeInfo.categories[0]} / {book.volumeInfo.description}</div>
                        </div>
                        <div className="tile-action">
                            <button onClick={ev => saveBook(book)} className="btn btn-primary">save</button>
                        </div>
                        
                    </div>
                  
                ))}
      </div>
    </div>
  );
};

export default Header;
