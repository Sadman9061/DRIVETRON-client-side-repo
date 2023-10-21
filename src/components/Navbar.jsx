import { NavLink, useLoaderData } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
// import { useEffect } from "react";


const Navbar = ({ handleToggle, theme }) => {
    const loadedUser = useLoaderData()


    const [click, setClick] = useState(false);
    const { user, logOut } = useContext(AuthContext);


    const handleSignOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.error(error);
            })
    }


    const handleClick = () => {
        setClick(!click)
        console.log(click);
    }
    // const p = user && user.email
    // const findUser = loadedUser?.find(async(person) => 
    //  await person.email === await p &&
    //  )
    // console.log(findUser);






    console.log(user ? 'true' : 'false');





    return (
        <div className=" navbar bg-gradient-to-l from-[#b8d3d6] to-[#d2e9e9] " >
           


            <div className="navbar-start  ">


                <details className="dropdown ">
                    <summary className={`m-1 btn btn-ghost btn-circle`} onClick={handleClick}  > {
                        click ? <RxCross2 className="text-2xl "></RxCross2> : <RxHamburgerMenu className="text-2xl "></RxHamburgerMenu>
                    }</summary>
                    <ul className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                        </li>
                        <li><NavLink
                            to="/addProducts"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Add Products
                        </NavLink></li>
                        <li><NavLink
                            to="/myCart"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            My Cart
                        </NavLink></li>

                        <li className="md:hidden flex">



                            <NavLink
                                to="/registration"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
                                }
                            >
                                Sign Up
                            </NavLink>


                        </li>
                        <li>
                            <div className=" md:hidden flex ">

                                <div >
                                    <button className="btn btn-square btn-ghost">
                                        <label className="swap swap-rotate w-12 h-12">
                                            <input
                                                className=" "
                                                type="checkbox"
                                                value='click'
                                                onChange={handleToggle}
                                                // show toggle image based on localstorage theme
                                                checked={theme === "light" ? false : true}
                                            />
                                            {/* light theme sun image */}
                                            {/* <img src={sun} alt="light" className="w-8 h-8 swap-on" /> */}
                                            <svg className="swap-on fill-current w-8 h-8  text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                            {/* dark theme moon image */}
                                            {/* <img src={moon} alt="dark" className="w-8 h-8 swap-off" /> */}
                                            <svg className="swap-off fill-current w-8 h-8  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                                        </label>
                                    </button>
                                    <div className="w-10  mr-2 -ml-1">
                                        <h1 className=" ml-1 ">
                                            {
                                                user ? <button className="border -ml-1 w-[59px]" onClick={handleSignOut}>Log Out</button> :
                                                    <NavLink
                                                        to="/login"
                                                        className={({ isActive, isPending }) =>
                                                            isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
                                                        }
                                                    >
                                                        Login
                                                    </NavLink>
                                            }


                                        </h1>
                                        <button className="btn btn-ghost btn-circle ">

                                            {user && user?.photoURL ? <img src={user && user.photoURL} alt="" /> :
                                                <div>{
                                                    user && loadedUser?.map(user => <img key={user._id} src={user.photo} alt="" />)
                                                }</div>}
                                        </button>
                                    </div>
                                    <h1 className="mx-2 lg:mx-3     w-28">
                                        {user && user?.photoURL ? <p>{user && user.displayName}</p> :
                                            <div>{
                                                user && user && loadedUser?.map(user => <p key={user._id}>{user.name}</p>)
                                            }</div>}
                                    </h1>
                                </div>
                            </div>
                        </li>
                    </ul>
                </details>
            </div>
            <div className=" mr-20 md:mr-0  navbar-center ">
                <img className="mr-4 rounded-full w-10 " src="https://i.ibb.co/9w21jhv/Screenshot-1872.png" alt="" />
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold  bg-gradient-to-l from-blue-500 to-[#52e4e4]  bg-clip-text text-transparent pr-10 md:pr-5  ">DRIVETRON</h1>
            </div>
            <div className="navbar-end hidden md:flex ">
                <div className="flex items-center mr-4">
                    <div>
                        <button className="btn btn-square btn-ghost">
                            <label className="swap swap-rotate w-12 h-12">
                                <input
                                    className=" "
                                    type="checkbox"
                                    value='click'
                                    onChange={handleToggle}
                                    // show toggle image based on localstorage theme
                                    checked={theme === "light" ? false : true}
                                />
                                {/* light theme sun image */}
                                {/* <img src={sun} alt="light" className="w-8 h-8 swap-on" /> */}
                                <svg className="swap-on fill-current w-8 h-8  text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                {/* dark theme moon image */}
                                {/* <img src={moon} alt="dark" className="w-8 h-8 swap-off" /> */}
                                <svg className="swap-off fill-current w-8 h-8  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                            </label>
                        </button>
                    </div>
                    <div className=" font-medium pr-2 lg:pr-4 text-xs">
                        {
                            user ? <button className="text-xs" onClick={handleSignOut}>Log Out</button> :
                                <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
                                    }
                                >
                                    Login
                                </NavLink>
                        }

                    </div>
                    <div className="px-2 lg:px-4 border-x-2 border-black text-xs">
                        <NavLink
                            to="/registration"
                            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
                            }
                        >
                            Sign Up
                        </NavLink>

                    </div>

                    <h1 className="mx-2 lg:mx-3  text-xs   w-28">

                        {user && user?.photoURL ? <p>{user && user.displayName}</p> :
                            <div>{
                                user && user && loadedUser?.map(user => <p key={user._id}>{user.name}</p>)
                            }</div>}
                    </h1>
                    <div className="w-10  ">
                        <button className="btn btn-ghost btn-circle ">
                            {user && user?.photoURL ? <img src={user && user.photoURL} alt="" /> :
                                <div>{
                                    user && loadedUser?.map(user => <img key={user._id} src={user.photo} alt="" />)
                                }</div>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;