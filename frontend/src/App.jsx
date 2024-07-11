import { Routes, Route } from 'react-router-dom';
import CreateBooks from './pages/CreateBooks.jsx';
import DeleteBook from './pages/DeleteBook.jsx';
import EditBook from './pages/EditBook.jsx';
import ShowBook from './pages/ShowBook.jsx';
import Home from './pages/Home.jsx';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books/create" element={<CreateBooks />} />
            <Route path="/books/details/:id" element={<ShowBook />} />
            <Route path="/books/delete/:id" element={<DeleteBook />} />
            <Route path="/books/edit/:id" element={<EditBook />} />
        </Routes>
    );
};

export default App;
