import React, { Fragment, useContext, useEffect, useState } from "react";
import Link from 'next/link';
import { Dialog, Disclosure, Menu, Transition, Listbox } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faMinus, faPlus, faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../context/DataContext";
import { Formik } from 'formik';
import Dropdown from "./Dropdown";
import Steps from "./Steps";
import Modal from "./Modal";
import ModalCheckout from "./ModalCheckout";
import ModalCart from "./ModalCart";
const isBrowser = typeof window !== "undefined";
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [modalCartVisible, setModalCartVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [refres, setRefres] = useState(0);
    const { cart, editCantidad, deleteProduct, setCart } = useContext(DataContext);
    const sumCant = (prod, cant) => {
        editCantidad(prod)
    }
    const delCant = (prod, cant) => {
        console.log(prod)
        if (cant > 1) {
            editCantidad(prod)
        }
    }
    const openModal = () => {
        setModalCartVisible(true)
    }
    const closeModal = () => {
        setModalCartVisible(false)
    }
    const refresh = () => {
        setRefres(Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100);
    }
    useState(() => {
        setRefres(Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100);
    }, [refres])
    return isBrowser ? (
        <>
            <nav className="w-screen bg-blue" id="nav">
                <div className="flex flex-row justify-between px-4 mx-auto lg:max-w-full md:items-center md:flex md:px-8">
                    <div className="flex md:items-center justify-start">
                        <div>
                            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                                <a className="hidden md:flex items-center justify-center text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                                    <img src={`https://assets.minimayorista.cl/Logo-Minimayorista-chico.png.webp`} alt="Company logo" className="h-16 w-full md:h-14 md:w-60 text-black pr-2" />
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
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-row justify-center items-center ${!navbar ? "block" : "hidden"}`}>
                        {/* <div className="flex flex-row justify-center items-center bg-red-500 p-1 rounded-full relative left-4 top-2">
                        <span className="text-white">0</span>
                    </div> */}
                        <button onClick={() => { setModalCartVisible(true); }}>
                            <FontAwesomeIcon icon={faCartShopping} className="w-6 h-6 text-white" aria-hidden="true" />
                        </button>
                        {
                            cart?.length > 0 ?
                                <div className="bg-red-500 rounded-full relative -left-2 -top-3">
                                    <span className="text-white p-2 text-sm">{cart.length}</span>
                                </div>
                                : null
                        }
                    </div>
                </div>
            </nav >

            <ModalCart cart={cart} delCant={delCant} sumCant={sumCant} deleteProduct={deleteProduct} refresh={refresh}
            closeModal={closeModal} setModalVisible={setModalVisible} modalCartVisible={modalCartVisible}
            setModalCartVisible={setModalCartVisible} />
            <ModalCheckout content={cart} setModalVisible={setModalVisible} modalVisible={modalVisible} />
        </>
    ) : <div></div>
}
export default Navbar;
