import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavButton from './NavButton';

const Navigation = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 0;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <header className={`z-10 top-0 fixed w-full ${scroll ? 'shadow-xl' : ''}`}>
      <nav
        className={`border-gray-200 transition-all ease-in-out duration-1000 ${scroll ? 'p-4 lg:px-6 bg-white dark:bg-[#111]' : 'p-8 lg:px-6 bg-transparent'}`}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://srasolutions.com.au/wp-content/uploads/2017/02/Logos-fake-mock-up-illust-ss143531671-2.png"
              className={`mr-3 transition-all ease-in-out duration-500 ${scroll ? 'h-9 md:h-18' : 'h-12 md:h-24'}`}
              alt="PE Logo"
            />
          </Link>
          <div className="flex items-center gap-6">
            <NavButton
              href="/log-in"
              title="Logga in"
              openInNewTab
              className={`dark:text-white border-transparent hover:border-black dark:hover:border-white
              ${scroll ? 'px-3 py-2 text-xs md:text-xs ' : 'px-3 md:px-5 py-2.5 text-xs md:text-lg'}`}
            />
            <NavButton
              href="/register"
              title="Registrera"
              openInNewTab
              className={`dark:text-white border-transparent hover:border-black dark:hover:border-white
              ${scroll ? 'px-3 py-2 text-xs md:text-xs ' : 'px-3 md:px-5 py-2.5 text-xs md:text-lg'}`}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
