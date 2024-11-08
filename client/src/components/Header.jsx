import {Button, Navbar, TextInput} from 'flowbite-react';
import { Link } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai';
import {FaMoon} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm 
        sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Naol's</span>
            <span className='text-black'>Blog</span>
        </Link>
        <form>
            <TextInput
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch/>
        </Button>
        <div className="flex gap-2 md:order-2">
            <Button color='gray' className='w-12 h-10 hidden sm:inline 'pill>
                <FaMoon/>
            </Button>
            <Link to='/signin'>
                <Button outline className='text-black bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500'>
                    Sign In
                </Button>
            </Link>
            <Navbar.Toggle/>
        
        </div>
        <Navbar.Collapse className='sm:inline-flex'>
                <Navbar.Link>
                    <Link to='/' active={path==="/"} as={"div"}>
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path==="/about"} as={"div"}>
                    <Link to='/about'>
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path==="/projects"} as={"div"}>
                    <Link to='/projects'>
                        Projects
                    </Link>
                </Navbar.Link>
                
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header