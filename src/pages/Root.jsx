import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";


const Root = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    // update state on toggle
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    // set theme state in localstorage on mount & also update localstorage on state change
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    return (
        <div style={{ color: theme === "dark" ? "white" : "black" }}>
            <Navbar handleToggle={handleToggle} theme={theme}></Navbar>
            
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Root;