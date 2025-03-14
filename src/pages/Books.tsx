import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';

const Books = () => {
  const books = [
    {
      title: "Seeing is Forgetting the Name of the Thing One Sees",
      author: "Lawrence Weschler",
      coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387702551i/74903.jpg",
    },
    {
      title: "Underground",
      author: "Haruki Murakami",
      coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388187505i/17141.jpg",
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Books - Adnan Shamim</title>
        <meta name="description" content="Book collection and reviews by Adnan Shamim" />
      </Helmet>

      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-mono mb-16">Bookshelf</h1>
        
        <div className="w-full max-w-[540px] mb-8">
          <select 
            className="w-full bg-transparent border border-[#4444aa] text-white p-2 font-mono text-sm focus:outline-none focus:border-[#6666cc]"
            defaultValue="date"
          >
            <option value="date" className="bg-[#000033]">Date Read</option>
            <option value="title" className="bg-[#000033]">Title</option>
            <option value="author" className="bg-[#000033]">Author</option>
          </select>
        </div>

        <div className="w-full max-w-[540px] grid grid-cols-1 sm:grid-cols-2 gap-8">
          {books.map((book) => (
            <div key={book.title} className="flex flex-col">
              <img
                src={book.coverUrl}
                alt={book.title}
                className="w-full aspect-[3/4] object-cover mb-4"
                loading="lazy"
              />
              <h2 className="font-mono text-base">{book.title}</h2>
              <p className="font-mono text-sm text-[#4444aa]">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Books;