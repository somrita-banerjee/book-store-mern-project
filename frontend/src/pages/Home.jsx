import {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { backendUrl } from '../config';

const Home = () => {

    const [books, setBooks] = useState([]);  
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(backendUrl + '/books')
            .then((res) => {
                setBooks(res.data.data);
                setLoading(false);
            }) 
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='p-4'>
            <div className='flex justify-betwen items-center'>
                <h1 className='text-3xl my-8'>Book List</h1>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-3xl text-green-500' />
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <table className='w-full border-seperate boder-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-gray-800 rounded-md'>No</th>
                            <th className='border border-gray-800 rounded-md'>Title</th>
                            <th className='border border-gray-800 rounded-md max-md:hidden'>Author</th>
                            <th className='border border-gray-800 rounded-md max-md:hidden'>Publish Year</th>
                            <th className='border border-gray-800 rounded-md'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book._id} className='h-8'>
                                <td className='border border-gray-900 rounded-md text-center'>{index + 1}</td>
                                <td className='border border-gray-800 rounded-md text-center'>{book.title}</td>
                                <td className='border border-gray-800 rounded-md text-center max-md:hidden'>{book.author}</td>
                                <td className='border border-gray-800 rounded-md text-center max-md:hidden'>{book.publishYear}</td>
                                <td className='border border-gray-800 rounded-md text-center'>
                                    <div className='flex justify-center items-center space-x-2'>
                                        <Link to={`/books/details/${book._id}`}>
                                            <BsInfoCircle className='text-yellow-500' />
                                        </Link>
                                        <Link to={`/books/edit/${book._id}`}>
                                            <AiOutlineEdit className='text-blue-500' />
                                        </Link>
                                        <Link to={`/books/delete/${book._id}`}>
                                            <MdOutlineDelete className='text-red-500' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Home