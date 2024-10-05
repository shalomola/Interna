import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] w-full'>
        <div className='flex flex-col items-center'>
            <h1 className='text-white font-bold text-[200px]'>404</h1>
            <p className='text-white'>Page not found</p>
            <Link to='/' className='text-white hover:text-gray-300'>Go back to home</Link>
        </div>
    </div>
  )
}

export default NotFound