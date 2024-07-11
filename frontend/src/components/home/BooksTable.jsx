/* eslint-disable react/prop-types */
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const BooksTable = ({ books }) => {
    return (
        <table className="w-full border-seperate boder-spacing-2">
            <thead>
                <tr>
                    <th className="border border-gray-800 rounded-md">No</th>
                    <th className="border border-gray-800 rounded-md">Title</th>
                    <th className="border border-gray-800 rounded-md max-md:hidden">
                        Author
                    </th>
                    <th className="border border-gray-800 rounded-md max-md:hidden">
                        Publish Year
                    </th>
                    <th className="border border-gray-800 rounded-md">
                        Operations
                    </th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, index) => (
                    <tr key={book._id} className="h-8">
                        <td className="border border-gray-900 rounded-md text-center">
                            {index + 1}
                        </td>
                        <td className="border border-gray-800 rounded-md text-center">
                            {book.title}
                        </td>
                        <td className="border border-gray-800 rounded-md text-center max-md:hidden">
                            {book.author}
                        </td>
                        <td className="border border-gray-800 rounded-md text-center max-md:hidden">
                            {book.publishYear}
                        </td>
                        <td className="border border-gray-800 rounded-md text-center">
                            <div className="flex justify-center items-center space-x-2">
                                <Link to={`/books/details/${book._id}`}>
                                    <BsInfoCircle className="text-yellow-500" />
                                </Link>
                                <Link to={`/books/edit/${book._id}`}>
                                    <AiOutlineEdit className="text-blue-500" />
                                </Link>
                                <Link to={`/books/delete/${book._id}`}>
                                    <MdOutlineDelete className="text-red-500" />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BooksTable;
