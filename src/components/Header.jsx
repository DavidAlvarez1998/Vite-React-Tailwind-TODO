import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";


const initialTeme = () => localStorage.getItem('theme') === "dark"

const Header = () => {

    const [darkMode, setDarkMode] = useState(initialTeme)

    useEffect(() => {

        if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.theme = "dark"
        }
        else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = "light"
        }
    }, [darkMode])




    return (
        <header className="container mx-auto px-4 pt-8 md:max-w-xl">
            <div className="flex justify-between">
                <h1 className="uppercase text-3xl text-white font-semibold tracking-[0.5em]">Tareas</h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun /> : <IconMoon />}
                </button>
            </div>
        </header>
    )
}

export default Header;
