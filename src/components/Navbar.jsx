import React, { Fragment, useState } from "react";
import Link from 'next/link';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-screen bg-blue">
            <div className="flex flex-row justify-between px-4 mx-auto lg:max-w-full md:items-center md:flex md:px-8">
                <div className="flex md:items-center justify-start">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a className="hidden md:flex items-center justify-center text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                                <img src={`https://minimayorista.cl/wp-content/uploads/2019/07/Logo-Minimayorista-chico.png.webp`} alt="Company logo" className="h-16 w-full md:h-14 md:w-60 text-black pr-2" />
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <FontAwesomeIcon icon={faXmark} className="h-6 w-6 text-white" />
                                    ) : (
                                        <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-white" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-12 ml-5 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-3 md:flex md:space-x-6 md:space-y-0">
                                <Link href="/" ><li className="text-white hover:bg-orange-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    <a href="#">Inicio</a>
                                </li></Link>
                                <Link href="#products"><li className="text-white hover:bg-orange-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    <a href="#">Tienda</a>
                                </li></Link>
                                {/* <Link href="#projects"><li className="text-white hover:bg-orange-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    <a href="#">Mejores ofertas</a>
                                </li></Link> */}
                                <Link href="#contact"><li className="text-white hover:bg-orange-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    <a href="#">Contactos</a>
                                </li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`flex flex-row justify-center items-center ${!navbar ? "block" : "hidden"}`}>
                    {/* <div className="flex flex-row justify-center items-center bg-red-500 p-1 rounded-full relative left-4 top-2">
                        <span className="text-white">0</span>
                    </div> */}
                    <FontAwesomeIcon icon={faCartShopping} className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
            </div>
        </nav >
    )
}

export default Navbar;
