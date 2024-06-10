import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookSearch = ({ addToBookshelf }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        setQuery(e.target.value);
        if (e.target.value.length > 2) {
            const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
            setResults(response.data.docs);
        } else {
            setResults([]);
        }
    };

    return (
        <div>
            <h1>Search for Books</h1>
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search for a book..."
            />
            <div>
                {results.map(book => (
                    <div key={book.key} className="book-card">
                        <h2>{book.title}</h2>
                        <p>{book.author_name?.join(', ')}</p>
                        <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
                    </div>
                ))}
            </div>
            <button onClick={() => navigate('/bookshelf')}>Go to My Bookshelf</button>
        </div>
    );
};

export default BookSearch;
