import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-black shadow-lg'>
        <div className='flex justify-between items-center max-w-6xl p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <Link to='/'>
            <span className='text-slate-500'>Auction</span>
            <span className='text-slate-200'>House</span>
            </Link>
            
        </h1>
        <form className='bg-slate-300  rounded-lg p-3 flex items-center'>
            <input type='text' placeholder='Search...' className='bg-transparent focus outline-none w-24 sm:w-64'/>
            <FaSearch className='bg-slate-300 bg-transparent'/>
        </form>
        <ul className='flex gap-4'>
            <Link to='/'>
                <li className='hidden sm:inline text-slate-100 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
                <li className='hidden sm:inline text-slate-100 hover:underline'>About</li>
            </Link>
            <Link to='/sign-in'>
                <li className='text-slate-100 hover:underline'>Sign in</li>
            </Link>
        </ul>
        </div>
        
    </header>
  )
}
