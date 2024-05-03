import React from 'react';
import Logo from "../../assets/logo.png"
import {Link} from "react-router-dom";
import { IoMdSearch } from "react-icons/io"
import {FaCaretDown, FaShoppingCart} from "react-icons/fa";
import {DarkMode} from "../index.js";
import {DropDownLinks, Menu} from "../../library.js";

function NavBar({ handleOrderPopup }) {
    return (
        <div className={"shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40"}>
            {/*upper nav*/}
            <div className={"bg-primary/40 py-2"}>
                <div className={"container flex items-center justify-between"}>
                    <div>
                        <Link
                            to={"/"}
                            className={"font-bold text-2xl sm:text-3xl flex gap-2"}
                        >
                            <img
                                src={Logo}
                                alt={"logo"}
                                className={"w-10"}
                            />
                            Shopsy
                        </Link>
                    </div>
                    {/*search bar*/}
                    <div className={"flex items-center justify-between gap-4"}>
                        <div className={"group hidden sm:block relative"}>
                            <input
                                type="text"
                                placeholder={"search"}
                                className={"w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300m px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"}
                            />
                            <IoMdSearch
                                className={"text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"}
                            />
                        </div>
                        {/*order button*/}
                        <button
                            onClick={handleOrderPopup}
                            className={"bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"}
                        >
                        <span
                            className={"group-hover:block hidden transition-all duration-200"}
                        >
                            Order
                        </span>
                            <FaShoppingCart
                                className={"text-xl text-white drop-shadow-sm cursor-pointer"}
                            />
                        </button>
                        {/*darkmode switch*/}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
            {/*lower nav*/}
            <div className={"flex justify-center"}>
                <ul
                    className={"sm:flex hidden items-center gap-4"}
                >
                    {
                        Menu && Menu.map((data) => (
                            <li
                                key={data.id}
                            >
                                <Link
                                    to={data.link}
                                    className={"inline-block px-4 hover:text-primary duration-200 uppercase font-semibold"}
                                >
                                    {data.name}
                                </Link>
                            </li>
                        ))
                    }
                    {/*simple dropdown and links*/}
                    <li className={"group relative place-items-center"}>
                        <Link
                            to={"/#"}
                            className={"uppercase font-semibold flex items-center gap-[2px] py-2 cursor-pointer"}
                        >
                            Trending Products
                            <span>
                                <FaCaretDown
                                    className={"transition-all duration-200 group-hover:rotate-180"}
                                />
                            </span>
                        </Link>
                        <div className={"absolute z-[9999] hidden group-hover:block w-full rounded-md text-black pt-2"}>
                            <ul className={"w-full shadow-md bg-white p-2"}>
                                {
                                    DropDownLinks.map((data) => (
                                        <li key={data.id}>
                                            <Link
                                                to={data.link}
                                                className={"inline-block w-full rounded-md p-2 hover:bg-primary/20"}
                                            >
                                                {data.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;