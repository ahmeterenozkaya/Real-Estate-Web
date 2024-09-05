import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function HoverMenuButton() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={toggleMenu}
      onMouseLeave={toggleMenu}
    >
      <div>
        <div className="cursor-pointer text-3xl"><Link to={"/advert"}>
          İlanlar
        </Link></div>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0  w-56 rounded-md shadow-lg  ring-1 ring-white ring-opacity-5">
          <div className="py-0 left-24" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div className="block px-4 py-2  text-black text-3xl  hover:text-red-900">
              <div className='group mt-0 flex relative' >
                <h1 className='hover:text-gray-900'>
                  <Link to={"/advert/arsa"}>
                    Arsa
                  </Link>
                </h1>
                <div className='group-hover:scale-100 scale-0 flex flex-col left-32 absolute'>
                  <Link to={"/advert/arsa/kiralik"} className='hover:text-gray-900' >
                    Kiralık
                  </Link>
                  <Link to={"/advert/arsa/satilik"} className='hover:text-gray-900'>
                    Satılık
                  </Link>
                </div>
              </div>
              <div className='group mt-3 flex relative' >
                <h1 className='hover:text-gray-900'>
                  <Link to={"/advert/ev"}>
                    Ev
                  </Link>
                </h1>
                <div className='group-hover:scale-100 scale-0 flex flex-col left-36 absolute'>
                  <Link to={"/advert/ev/kiralik"} className='hover:text-gray-900'>
                    Kiralık
                  </Link>
                  <Link to={"/advert/ev/satilik"} className='hover:text-gray-900'>
                    Satılık
                  </Link>
                </div>
              </div>
              <div className='group mt-3 flex relative' >
                <h1 className='hover:text-gray-900'>
                  <Link to={"/advert/bungalov"} className='hover:text-gray-900'>
                    Bungalov
                  </Link>
                </h1>
                <div className='group-hover:scale-100 scale-0 flex flex-col left-36 absolute'>
                  <Link to={"/advert/bungalov/kiralik"} className='hover:text-gray-900'>
                    Kiralık
                  </Link>
                  <Link to={"/advert/bungalov/satilik"} className='hover:text-gray-900'>
                    Satılık
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HoverMenuButton
