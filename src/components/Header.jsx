import React, { useState } from 'react'
import { FaMoon , FaSun } from 'react-icons/fa';

const Header = () => {
    const [toggleMode, setToggleMode] = useState(false);
    const toggleTheme = () => {
      setToggleMode(!toggleMode);
    }
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-lg md:text-2xl font-semibold">Nancy Notes</h1>
      <button onClick={toggleTheme} className="bg-pink-400 p-2 rounded-full cursor-pointer" >
        {toggleMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}

export default Header;