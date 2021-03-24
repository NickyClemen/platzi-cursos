import { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false); // Se destructura el estado y el handler que muta el estado.
    // A useeState se le pasa el estado inicial.
    const color = useContext(ThemeContext);

    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className="Header">
            <h1 style={{ color }}>ReactHooks</h1>
            <button type="button" onClick={handleClick}>{darkMode ? 'DarkMode' : 'LightMode'}</button>
            <button type="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'DarkMode' : 'LightMode'}</button>
        </div>
    );
}

export default Header;