import { useState } from 'react';
import Logo from '../assets/logo.png';
import { NavbarData } from '../data/data';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import Darkmode from './Darkmode';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div className='text-black dark:text-white duration-300 relative z-[9999]'>
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <div className="flex items-center gap-3">
            <img 
              src={Logo} 
              alt="" 
              className='h-16'
            />
            <p className="text-3xl">
              VR <span className="font-bold">World</span>
            </p>
          </div>
          {/* desktop menu section */}
          <nav className='hidden md:block'>
            <ul className='flex items-center gap-8'>
              {NavbarData.map((data) => (
                <li key={data.id} className='py-4'>
                  <a href={data.link} className='text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500'>
                    {data.name}
                  </a>
                </li>
              ))}
              {/* darkmode feature */}
              <Darkmode />
            </ul>
          </nav>
          {/* mobile menu section */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4">
              <Darkmode />
              {showMenu ? (
              <HiMenuAlt1 
                onClick={toggleMenu} 
                className='cursor-pointer' 
                size={30} 
              />
            ) : (
              <HiMenuAlt3 
                onClick={toggleMenu} 
                className='cursor-pointer' 
                size={30} 
              />
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar