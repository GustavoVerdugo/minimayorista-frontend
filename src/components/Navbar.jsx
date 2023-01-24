import React, { Fragment, useContext, useEffect, useState } from "react";
import Link from 'next/link';
import { Dialog, Disclosure, Menu, Transition, Listbox } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faMinus, faPlus, faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../context/DataContext";
import PersonalData from "./Checkout/personalData";
import { Formik } from 'formik';
import Dropdown from "./Dropdown";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [modalCartVisible, setModalCartVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const { cart, editCantidad, comunas, confirmate, saveConfirmate } = useContext(DataContext);
    const [stageCart, setStageCard] = useState([]);
    const [stepTitle, setStepTitle] = useState('');
    const [setpContent, setStepContent] = useState('');
    let initialValues = {
        estado: 'en proceso',
        subtotal: 0,
        total: 0,
        tipos_de_pago: 1,
        nota_cliente: '',
        productos: [],
        envio: 0,
        nombre: '',
        apellido: '',
        direccion: '',
        region: 'Metropolitana',
        ciudad: 'Santiago',
        comuna: '',
        email: '',
        telefono: ''
    }
    const [data, setData] = useState(initialValues);
    const handleChange = (name, value) => {
        setData({ ...data, [name]: value })
        saveConfirmate(data);
    }
    let st = 1;
    const sumCant = (prod, cant) => {
        editCantidad(prod)
    }
    const delCant = (prod, cant) => {
        if (cant > 1) {
            editCantidad(prod)
        }
    }
    const changesSteps = (pr) => {
        st = pr;
        switch (st) {
            case 1:
                setStepTitle('Datos Personales')
                setStepContent(<Step1 setModalVisible={setModalVisible} data={data} handleChange={handleChange} changesSteps={changesSteps} />)
                break;
            case 2:
                setStepTitle('Envio')
                setStepContent(<Step2 changesSteps={changesSteps} handleChange={handleChange} />)
                break;
            case 3:
                setStepTitle('Confirmación de Pedido')
                setStepContent(<Step3 changesSteps={changesSteps} cart={cart} handleChange={handleChange} data={data} />)
                break;
        }
    }
    useEffect(() => {
        changesSteps(1)
    }, [])
    useEffect(() => {
        console.log(confirmate)
    }, [confirmate])
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
                                                cart.length > 0 ?
                                                    cart.map((ct) => (
                                                        <div className='flex flex-row justify-between w-full h-fit bg-white rounded-md' key={ct.id}>
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
                                                    : <h1 className="text-black">Tu carrito está vacio</h1>
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
                                                className={cart.length <= 0 ? `ml-2 bg-gray-200 rounded-md p-2`
                                                    : `inline-flex justify-center rounded-md border border-transparent bg-blue px-4 py-2 text-sm font-medium text-white hover:bg-blue-strong`}
                                                disabled={cart.length > 0 ? false : true}
                                                onClick={() => { setModalVisible(true); setModalCartVisible(false); }}
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
            {/* Modal Embebido */}
            <Transition appear show={modalVisible} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => { setModalVisible(false); }}>
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
                                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="flex flex-col justify-center items-center text-lg font-semibold leading-6 "
                                    >
                                        <span className='text-gray-900'>{stepTitle}</span>
                                    </Dialog.Title>
                                    {setpContent}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
const Step1 = ({ setModalVisible, changesSteps, handleChange }) => {
    const { comunas } = useContext(DataContext);
    const [selected, setSelected] = useState(comunas[0])
    return (
        <div className="mt-10">
            <div className="grid grid-cols-2 grid-rows-3 gap-4 justify-items-start">
                <div>
                    <label className="mr-4 text-gray-dark">Nombre</label>
                    <input className="p-2 outline-none rounded-md h-fit md:w-full text-base bg-gray-100" autoFocus={true}
                        onChange={nombre => handleChange('nombre', nombre.target.value)} />
                </div>
                <div>
                    <label className="mr-4 text-gray-dark">Apellido</label>
                    <input className="p-2 outline-none rounded-md h-fit md:w-full text-base bg-gray-100"
                        onChange={apellido => handleChange('apellido', apellido.target.value)} />
                </div>
                <div>
                    <label className="mr-4 text-gray-dark">Dirección</label>
                    <input className="p-2 outline-none rounded-md h-fit md:w-full text-base bg-gray-100"
                        onChange={direccion => handleChange('direccion', direccion.target.value)} />
                </div>
                <div>
                    <label className="mr-4 text-gray-dark">Comuna</label>
                    <div style={{ width: 290 }}>

                    </div>
                    <Dropdown
                        selected={selected} setSelected={setSelected}
                        data={comunas} onSelect={handleChange} field={'comuna'} />
                    {/* <SelectList
                            setSelected={setSelectComuna} data={comunas} onSelect={() => {
                                handleChange('city', selectComuna)
                            }}
                            placeholder={'Seleccionar'} search={false} /> */}
                </div>
                <div>
                    <label className="mr-4 text-gray-dark">Correo</label>
                    <input className="p-2 outline-none rounded-md h-fit md:w-full text-base bg-gray-100"
                        onChange={email => handleChange('email', email.target.value)} />
                </div>
                <div>
                    <label className="mr-4 text-gray-dark">Celular</label>
                    <input className="p-2 outline-none rounded-md h-fit md:w-full text-base bg-gray-100"
                        onChange={telefono => handleChange('telefono', telefono.target.value)} />
                </div>
            </div>
            <div className="flex flex-row justify-evenly items-center mt-8">
                <button className="p-2 text-white bg-red-500 rounded-md outline-none focus:border-gray-400"
                    onClick={() => { setModalVisible(false); }}>
                    Cancelar
                </button>
                <button className="p-2 text-white bg-blue rounded-md outline-none focus:border-gray-400"
                    onClick={() => { changesSteps(2); }}>
                    Siguiente
                </button>
            </div>
        </div>
    )
}
const Step2 = ({ changesSteps, handleChange }) => {
    const { tiposEnvio } = useContext(DataContext);
    const [selected, setSelected] = useState(tiposEnvio[0])
    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 grid-rows-1 gap-2 justify-items-center min-w-full">
                <div className="w-96">
                    <label className="mr-4 text-gray-dark">Envío</label>
                    <Dropdown
                        selected={selected} setSelected={setSelected}
                        data={tiposEnvio} onSelect={handleChange} field={'envio'} />
                    {/* <SelectList
                            setSelected={setSelectComuna} data={comunas} onSelect={() => {
                                handleChange('city', selectComuna)
                            }}
                            placeholder={'Seleccionar'} search={false} /> */}
                </div>
                <div className="w-96">
                    <label className="mr-4 text-gray-dark">Nota especial</label>
                    <textarea id="message" rows="8" className="resize-none block p-2.5 w-full text-base text-gray-dark bg-gray-100 rounded-lg border border-gray-200"
                        onChange={nota_cliente => handleChange('nota_cliente', nota_cliente.target.value)} placeholder="Escribe algún comentario ..."></textarea>
                </div>
            </div>
            <div className="flex flex-row justify-evenly items-center mt-8">
                <button className="p-2 text-white bg-red-500 rounded-md outline-none focus:border-gray-400"
                    onClick={() => { changesSteps(1) }}>
                    Atras
                </button>
                <button className="p-2 text-white bg-blue rounded-md outline-none focus:border-gray-400"
                    onClick={() => { changesSteps(3) }}>
                    Siguiente
                </button>
            </div>
        </div>
    )
}
const Step3 = ({ changesSteps, cart, handleChange, data }) => {
    const { comunas } = useContext(DataContext);
    const calculeSubTotal = async () => {
        let sub = 0;
        let total = 0;
        await cart.map((index) => {
            sub = sub + (index.price * index.cant)
        })
        await comunas.map((index) => {
            if (data.cliente.comuna) { }
        })
        handleChange('subtotal', sub);
    }
    useEffect(() => {
        handleChange('productos', cart);
        calculeSubTotal();
    }, [])
    return (
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
            <div className="flex flex-row justify-evenly items-center mt-8">
                <button className="p-2 text-white bg-red-500 rounded-md outline-none focus:border-gray-400"
                    onClick={() => { changesSteps(2) }}>
                    Atras
                </button>
                <button className="p-2 text-white bg-blue rounded-md outline-none focus:border-gray-400">
                    Pagar
                </button>
            </div>
        </div>
    )
}
export default Navbar;
