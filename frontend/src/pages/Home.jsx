import React, {useEffect, useState} from 'react';
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
        <div className=''>Home</div>
    )
}

export default Home