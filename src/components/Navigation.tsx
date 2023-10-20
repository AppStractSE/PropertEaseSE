import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

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
    <header className={`z-10 sticky top-0 ${scroll ? 'shadow-xl' : 'shadow-2xl'}`}>
      <nav className={`bg-white border-gray-200 dark:bg-[#111] ${scroll ? 'p-4 lg:px-6' : 'p-8 lg:px-6'}`}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://srasolutions.com.au/wp-content/uploads/2017/02/Logos-fake-mock-up-illust-ss143531671-2.png"
              className="mr-3 h-6 sm:h-9"
              alt="PE Logo"
            />
            <span className="hidden md:block self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              PropertEase
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Button href="/log-in" title="Logga in"
            openInNewTab
            colors='text-purple-700 border-purple-700 hover:text-white dark:hover:text-white hover:bg-purple-800 dark:hover:bg-purple-500'
            className={`
              ${scroll ? 'px-3 py-2' : 'px-5 py-2.5'}`} />
            <Button href="/register" title="Registrera"
            openInNewTab
            colors='text-primary-700 border-primary-700 hover:text-white dark:hover:text-white hover:bg-primary-800 dark:hover:bg-primary-500'
            className={`
              ${scroll ? 'px-3 py-2' : 'px-5 py-2.5'}`} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
