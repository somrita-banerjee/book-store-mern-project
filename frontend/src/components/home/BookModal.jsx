/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModal = ({ book, onClose }) => {
  return (
    <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center " onClick={onClose}>BookModel
        <div onClick={(event) => event.stopPropagation()} className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative">
            <AiOutlineClose className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer" onClick={onClose}/>
            <h2 className="w-fit bg-gray-500 text-white px-2 py-1 rounded-lg"> {book.publishYear} </h2>
                    <h3 className="text-xl font-bold"> {book._id} </h3>
                    <div className="flex justify-between items-center">
                        <PiBookOpenTextLight className="text-2xl text-gray-500" />
                        <h4 className="text-lg text-gray-500"> {book.title} </h4>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                        <BiUserCircle className="text-2xl text-gray-500" />
                        <h2 className="text-lg text-gray-500"> {book.author} </h2>
                    </div>
                    <p className="mt-4">Anything you want to show</p>
                    <p className="my-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eaque ex obcaecati dicta illum molestias quam nisi libero labore, rerum mollitia perspiciatis natus temporibus, aliquam ut quibusdam consequuntur cupiditate laborum?
                    </p>

        </div>
    </div>

);
};

export default BookModal;