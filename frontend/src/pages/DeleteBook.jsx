import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { backendUrl } from "../config";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const { enqueueSnackbar } = useSnackbar();
    
    useEffect(() => {
        setLoading(true);
        axios
            .get(backendUrl + `/books/${id}`)
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                enqueueSnackbar('An error happened', { variant: 'error'});
            });
    }, [id]);

    const handleDeleteBook = () => {
        setLoading(true);
        axios
            .delete(backendUrl + `/books/${id}`)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book deleted successfully', { variant: 'success' });
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                enqueueSnackbar('An error happened', { variant: 'error' });
            });
    };
    return (
        <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4 ">Show Book</h1>
        {loading ? (
            <Spinner />
        ) : (
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
                <h3 className="text-2xl text-red-500">Are you sure you want to delete this book?</h3>   
                <button onClick={handleDeleteBook} className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">Delete</button>
                
            </div>
        )}
    </div>
    )
}

export default DeleteBook