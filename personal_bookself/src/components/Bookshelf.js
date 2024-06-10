import React, { useState, useEffect } from 'react';

const Bookshelf = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(storedBooks);
    }, []);

    return (
        <div>
            <h1>My Bookshelf</h1>
            {bookshelf.length === 0 ? (
                <p>Your bookshelf is empty. Add some books!</p>
            ) : (
                <div>
                    {bookshelf.map(book => (
                        <div key={book.key} className="book-card">
                            <h2>{book.title}</h2>
                            <p>{book.author_name?.join(', ')}</p>
                        </div>
                    ))}
                </div>
            )}
            <button onClick={() => window.location.href = '/'}>Back to Search</button>
        </div>
    );
};

export default Bookshelf;
