import { BsArrowLeft } from "react-icons/bs"
import { Link } from "react-router-dom"

const BackButton = ({ destination = '/' }) => {
  return (
    <div className="flex">
        <Link
        to={destination}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit"
        >
        <BsArrowLeft className="text-2xl " />
        </Link>
    </div>
  )
}

export default BackButton