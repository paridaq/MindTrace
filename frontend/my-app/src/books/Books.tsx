
import React, { useState } from 'react';
import './Books.css';

interface Book {
    id: number;
    name: string;
    category: string;
    image: string;
    description: string;
}

const Books: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([
        {
            id: 1,
            name: 'Clean Code',
            category: 'Programming',
            image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
            description: 'A Handbook of Agile Software Craftsmanship.'
        },
        {
            id: 2,
            name: 'The Pragmatic Programmer',
            category: 'Software Engineering',
            image: 'https://m.media-amazon.com/images/I/51W1sBPO7tL._SX380_BO1,204,203,200_.jpg',
            description: 'Your Journey to Mastery.'
        }
    ]);

    const [newBook, setNewBook] = useState({
        name: '',
        category: '',
        image: '',
        description: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewBook(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setNewBook(prev => ({ ...prev, image: imageUrl }));
        }
    };

    const handleAddBook = () => {
        if (!newBook.name || !newBook.category || !newBook.description) return;

        const book: Book = {
            id: books.length + 1,
            name: newBook.name,
            category: newBook.category,
            image: newBook.image || 'https://via.placeholder.com/150', // Fallback image
            description: newBook.description
        };

        setBooks([book, ...books]);
        setNewBook({ name: '', category: '', image: '', description: '' });
    };

    return (
        <div className="books-container">
            <div className="books-header">
                <h1>Your Library</h1>
                <p>Curate your reading list and track your knowledge.</p>
            </div>

            <div className="book-layout">
                {/* Add Book Form */}
                <div className="add-book-card">
                    <h2>Add New Book</h2>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Book Title"
                            value={newBook.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="category"
                            placeholder="Category (e.g., Tech, Fiction)"
                            value={newBook.category}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group file-input-wrapper">
                        <label htmlFor="file-upload" className="custom-file-upload">
                            {newBook.image ? "Image Selected" : "Upload Book Cover"}
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="description"
                            placeholder="Short Description..."
                            rows={3}
                            value={newBook.description}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <button className="add-book-btn" onClick={handleAddBook}>
                        Add to Library
                    </button>
                </div>

                {/* Books Grid */}
                <div className="books-grid">
                    {books.length === 0 ? (
                        <div className="empty-state">
                            <p>No books in your library yet. Add one to get started!</p>
                        </div>
                    ) : (
                        books.map((book) => (
                            <div key={book.id} className="book-card">
                                <div className="book-image">
                                    <img src={book.image} alt={book.name} />
                                    <span className="book-category">{book.category}</span>
                                </div>
                                <div className="book-details">
                                    <h3>{book.name}</h3>
                                    <p>{book.description}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Books;