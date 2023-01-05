import React, { Fragment, useContext, useState } from "react";
import Link from 'next/link';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faMinus, faPlus, faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../context/DataContext";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [modalCartVisible, setModalCartVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const { cart, editCantidad} = useContext(DataContext);
    const sumCant = (prod, cant) => {
        editCantidad(prod)
    }
    const delCant = (prod, cant) => {
        if (cant > 1) {
            editCantidad(prod)
        }
    }
    return (
        <>
            <nav className="w-screen bg-blue">
                <div className="flex flex-row justify-between px-4 mx-auto lg:max-w-full md:items-center md:flex md:px-8">
                    <div className="flex md:items-center justify-start">
                        <div>
                            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                                <a className="hidden md:flex items-center justify-center text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                                    <img src={`https://minimayorista.cl/assets/Logo-Minimayorista-chico.png.webp`} alt="Company logo" className="h-16 w-full md:h-14 md:w-60 text-black pr-2" />
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
                        <button onClick={() => { setModalCartVisible(true); }}>
                            <FontAwesomeIcon icon={faCartShopping} className="w-6 h-6 text-white" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </nav >

            {/* modales */}
            <Transition appear show={modalCartVisible} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => { setModalCartVisible(false) }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="flex flex-col justify-center items-center text-lg font-semibold leading-6 "
                                    >
                                        <span className='text-gray-900'>{'Tu Carrito'}</span>
                                    </Dialog.Title>
                                    <div className="mt-8">
                                        <div className='flex flex-col justify-start items-center mt-8 h-60 overflow-y-scroll'>
                                            {
                                                cart ?
                                                    cart.map((ct) => (
                                                        <div className='flex flex-row justify-around w-full h-fit bg-white rounded-md' key={ct.id}>
                                                            <div className='w-20 h-20'>
                                                                <img src={ct.img} />
                                                            </div>
                                                            <div className='flex-shrink justify-center items-start'>
                                                                <span className='text-gray-800 mr-2 uppercase text-xs'>{ct.name}</span>
                                                                <div className='flex-row justify-start items-start'>
                                                                    <span className='text-gray-800 mr-3 uppercase text-sm font-semibold'>${parseInt(ct.price).toLocaleString('es-CL')}</span>
                                                                </div>
                                                                <div className='flex flex-row justify-start items-center'>
                                                                    <button className="bg-gray-100 rounded-sm p-0.5"
                                                                        onClick={() => {
                                                                            delCant(
                                                                                {
                                                                                    id: ct.id,
                                                                                    name: ct.name,
                                                                                    price: ct.price,
                                                                                    img: ct.img,
                                                                                    cant: ct.cant - 1
                                                                                },
                                                                                ct.cant
                                                                            )
                                                                        }}>
                                                                        <FontAwesomeIcon icon={faMinus} className='h-5 w-5 text-gray-dark' aria-hidden='true' />
                                                                    </button>
                                                                    <span className='text-gray-dark mx-2 text-base font-semibold'>{ct.cant}</span>
                                                                    <button className="bg-gray-100 rounded-sm p-0.5"
                                                                        onClick={() => {
                                                                            sumCant(
                                                                                {
                                                                                    id: ct.id,
                                                                                    name: ct.name,
                                                                                    price: ct.price,
                                                                                    img: ct.img,
                                                                                    cant: ct.cant + 1
                                                                                },
                                                                                ct.cant
                                                                            )
                                                                        }}>
                                                                        <FontAwesomeIcon icon={faPlus} className='h-5 w-5 text-gray-dark' aria-hidden='true' />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col justify-center items-center">
                                                                <FontAwesomeIcon icon={faTrashCan} className='h-6 w-6 text-red-500' aria-hidden='true' />
                                                            </div>
                                                        </div>
                                                    ))
                                                    : null
                                            }
                                        </div>
                                        <div className='flex flex-row justify-evenly items-center mt-8'>
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border-gray-dark bg-transparent border-2 px-4 py-2 text-sm font-medium text-black"
                                                onClick={() => { setModalCartVisible(false) }}
                                            >
                                                Cancelar
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue px-4 py-2 text-sm font-medium text-white hover:bg-blue-strong"
                                                onClick={() => { }}
                                            >
                                                Realizar Pedido
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <Transition appear show={modalVisible} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => { setModalVisible(false); setAddCart(false); }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="flex flex-col justify-center items-center text-lg font-semibold leading-6 "
                                    >
                                        <span className='text-gray-900'>{'hola'}</span>
                                    </Dialog.Title>
                                    <div className="mt-8">
                                        <img
                                            src={''}
                                            className="w-full h-full object-center object-cover group-hover:opacity-75 rounded-lg"
                                        />
                                        <div className='flex flex-col justify-center items-center mt-8'>
                                            <p className="text-lg font-bold text-black cursor-auto my-3">${10}</p>
                                            <del>
                                                <p className="text-sm text-gray-600 cursor-auto">${10}</p>
                                            </del>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Navbar;
