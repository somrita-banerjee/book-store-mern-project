/* eslint-disable react/prop-types */
import BookSingleCard from "./BookSingleCard";



const BooksCard = ({ books }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {books.map((item) => (
                <BookSingleCard key={item._id} book={item} />
        ))}
    </div>
  );
};

export default BooksCard