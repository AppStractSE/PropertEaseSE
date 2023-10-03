import { BsFillMoonFill } from 'react-icons/bs';
import { PiSunFill } from 'react-icons/pi';
import { useTheme } from '../contexts/ThemeProvider';

const ThemeToggler = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  return (
    <div className="ml-4 cursor-pointer" onClick={toggleTheme}>
      {isDarkMode ? <PiSunFill color="#fff" size={28} /> : <BsFillMoonFill size={28} />}
    </div>
  );
};

export default ThemeToggler;
