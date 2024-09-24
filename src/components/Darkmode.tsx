import { useEffect, useState } from 'react'
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';

const Darkmode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? 
        localStorage.getItem("theme") : "light"
    );
    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);
  return (
    <>
        {theme === "dark" ? (
            <BiSolidSun onClick={() => setTheme("light")} className='text-2xl cursor-pointer' />
        ) : (
            <BiSolidMoon onClick={() => setTheme("dark")} className='text-2xl cursor-pointer' />
        )}
    </>
  )
}

export default Darkmode