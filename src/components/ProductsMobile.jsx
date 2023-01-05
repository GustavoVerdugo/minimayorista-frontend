import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBullhorn, faCartPlus, faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-regular-svg-icons"
import Pagination from './Pagination';
import { DataContext } from '../context/DataContext';
import useFetchCustom from '../helpers/useFetchCustom';
const qs = require('qs');

const ProductsMobile = () => {
    const { productos, loading, filters, saveQuery, saveCart } = useContext(DataContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [addCart, setAddCart] = useState(false);
    const [detail, setDetail] = useState([]);
    const [cant, setCant] = useState(1);

    const addCant = () => {
        setCant(cant + 1)
    }

    const delCant = () => {
        if (cant > 1) {
            setCant(cant - 1)
        }
    }

    const purgCant = () => {
        setCant(1);
    }

    const { searching } = useFetchCustom();
    useEffect(() => {
        let query = null;
        if (filters[0]?.marcas.length > 0) {
            query = qs.stringify({
                filters: {
                    marca: {
                        id: {
                            $in: filters[0].marcas
                        }
                    },
                },
            }, {
                encodeValuesOnly: true,
            });
            saveQuery(query);
        } else if (filters[0]?.categorias.length > 0) {
            query = qs.stringify({
                filters: {
                    categorias: {
                        id: {
                            $in: filters[0].categorias
                        }
                    },
                },
            }, {
                encodeValuesOnly: true,
            });
            saveQuery(query);
        }
        console.log(query)
    }, [filters])

    return (
        <>
            <section className='w-full mx-1 flex flex-col'>
                {
                    !loading ?
                        productos.map((items) => (
                            <div className='flex flex-row justify-around w-full h-fit bg-white rounded-md' key={items.id}>
                                <button className='flex flex-row w-full h-fit bg-white rounded-md'
                                    onClick={() => { setDetail([items]); setIsOpenDetail(!isOpenDetail) }}
                                    disabled={!items.attributes.status_stock}>
                                    <div className='w-16 h-16'>
                                        <img src={items.attributes.imagen_principal.data.attributes.url} />
                                    </div>
                                    <div className='flex-shrink w-full justify-center items-start'>
                                        <span className='text-gray-800 mr-2 uppercase text-xs'>{items.attributes.nombre}</span>
                                        <div className='flex-row justify-start items-start'>
                                            {!items.attributes.status_stock ?
                                                <span className='text-red-500 p-2 rounded-sm text-xs'>Agotado</span>
                                                : false}
                                            <span className='text-gray-800 mr-3 uppercase text-xs line-through'>${parseInt(items.attributes.precio).toLocaleString('es-CL')}</span>
                                            <span className='text-gray-800 mr-3 uppercase text-sm font-semibold'>${parseInt(items.attributes.precio_oferta).toLocaleString('es-CL')}</span>
                                        </div>
                                    </div>
                                </button>
                                <div className='justify-center items-end '>
                                    <button className={!items.attributes.status_stock ? `m-2 flex-row justify-end items-center bg-gray-200 p-2 rounded-2xl` :
                                        `m-2 flex-row justify-end items-center bg-blue p-2 rounded-2xl`} disabled={!items.attributes.status_stock}
                                        onClick={() => { setDetail([items]); setIsOpen(!isOpen) }}>
                                        <FontAwesomeIcon icon={faCartPlus} className='h-6 w-6 text-white' aria-hidden='true' />
                                    </button>
                                </div>
                            </div>
                        ))
                        : null
                }
            </section>
            <div className="flex justify-end">
                <Pagination />
            </div>

            {/* modales */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => { setIsOpen(false) }}>
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
                                    {
                                        detail.map((item) => (
                                            <>
                                                <Dialog.Title
                                                    as="h3"
                                                    className="flex flex-row justify-center items-center max-w-sm text-lg font-bold leading-6 text-gray-900"
                                                >
                                                    ¿ Añadir &quot;{item.attributes.nombre}&quot; al Carrito ?
                                                </Dialog.Title>
                                                <div className="mt-8">
                                                    <img
                                                        src={item.attributes.imagen_principal.data.attributes.url}
                                                        className="w-full h-full object-center object-cover group-hover:opacity-75 rounded-lg"
                                                    />
                                                    <div className='flex flex-row justify-center items-center mt-8'>
                                                        <button className='bg-transparent flex flex-row justify-center items-center rounded-lg border-2 border-gray-700'
                                                            onClick={() => { delCant() }}>
                                                            <FontAwesomeIcon icon={faMinus} className='w-5 h-5' aria-hidden="true" />
                                                        </button>
                                                        <span className='mx-4 font-bold text-lg'>{cant}</span>
                                                        <button className='bg-transparent flex flex-row justify-center items-center rounded-lg border-2 border-gray-700'
                                                            onClick={() => { addCant() }}>
                                                            <FontAwesomeIcon icon={faPlus} className='w-5 h-5' aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="flex flex-row justify-evenly mt-10">
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border-gray-dark bg-transparent border-2 px-4 py-2 text-sm font-medium text-black"
                                                        onClick={() => { setIsOpen(false); purgCant(); }}
                                                    >
                                                        Cancelar
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue px-4 py-2 text-sm font-medium text-white hover:bg-blue-strong"
                                                        onClick={() => { 
                                                            saveCart({
                                                                id: item.id,
                                                                name: item.attributes.nombre,
                                                                price: item.attributes.precio_oferta,
                                                                img: item.attributes.imagen_principal.data.attributes.url,
                                                                cant: cant
                                                            });
                                                            setIsOpen(false);
                                                            purgCant();
                                                        }}
                                                    >
                                                        Aceptar
                                                    </button>
                                                </div>
                                            </>
                                        ))
                                    }

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <Transition appear show={isOpenDetail} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => { setIsOpenDetail(false); setAddCart(false); }}>
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
                                    {
                                        detail.map((item) => (
                                            <>
                                                <Dialog.Title
                                                    as="h3"
                                                    className="flex flex-col justify-center items-center text-lg font-semibold leading-6 "
                                                >
                                                    <span className='text-gray-900'>{item.attributes.nombre}</span>
                                                    <span className='text-gray-600'>{item.attributes.marca.data.attributes.nombre}</span>
                                                </Dialog.Title>
                                                <div className="mt-8">
                                                    <img
                                                        src={item.attributes.imagen_principal.data.attributes.url}
                                                        className="w-full h-full object-center object-cover group-hover:opacity-75 rounded-lg"
                                                    />
                                                    <div className='flex flex-col justify-center items-center mt-8'>
                                                        <p className="text-lg font-bold text-black cursor-auto my-3">${item.attributes.precio_oferta}</p>
                                                        <del>
                                                            <p className="text-sm text-gray-600 cursor-auto">${item.attributes.precio}</p>
                                                        </del>
                                                    </div>
                                                    {
                                                        !addCart ?
                                                            <div className="flex flex-row justify-evenly mt-10">
                                                                <button
                                                                    type="button"
                                                                    className="inline-flex justify-center rounded-md border-gray-dark bg-transparent border-2 px-4 py-2 text-sm font-medium text-black"
                                                                    onClick={() => { setIsOpenDetail(false) }}
                                                                >
                                                                    Seguir comprando
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className={!item.attributes.status_stock ? `inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-white` : `inline-flex justify-center rounded-md border border-transparent bg-blue px-4 py-2 text-sm font-medium text-white hover:bg-blue-strong`} disabled={!item.attributes.status_stock}
                                                                    onClick={() => { setAddCart(true) }}
                                                                >
                                                                    Agregar al carrito
                                                                </button>
                                                            </div>
                                                            :
                                                            <div className='flex flex-row justify-center items-center mt-8'>
                                                                <button className='bg-transparent flex flex-row justify-center items-center rounded-lg border-2 border-gray-700'
                                                                    onClick={() => { delCant() }}>
                                                                    <FontAwesomeIcon icon={faMinus} className='w-5 h-5' aria-hidden="true" />
                                                                </button>
                                                                <span className='mx-4 font-bold text-lg'>{cant}</span>
                                                                <button className='bg-transparent flex flex-row justify-center items-center rounded-lg border-2 border-gray-700'
                                                                    onClick={() => { addCant() }}>
                                                                    <FontAwesomeIcon icon={faPlus} className='w-5 h-5' aria-hidden="true" />
                                                                </button>
                                                            </div>
                                                    }
                                                </div>

                                                {
                                                    addCart ?
                                                        <div className="flex flex-row justify-evenly mt-10">
                                                            <button
                                                                type="button"
                                                                className="inline-flex justify-center rounded-md border-gray-dark bg-transparent border-2 px-4 py-2 text-sm font-medium text-black"
                                                                onClick={() => { setAddCart(false); purgCant(); }}
                                                            >
                                                                Cancelar
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue px-4 py-2 text-sm font-medium text-white hover:bg-blue-strong"
                                                                onClick={() => {
                                                                    saveCart({
                                                                        id: item.id,
                                                                        name: item.attributes.nombre,
                                                                        price: item.attributes.precio_oferta,
                                                                        img: item.attributes.imagen_principal.data.attributes.url,
                                                                        cant: cant
                                                                    });
                                                                    setIsOpenDetail(false); 
                                                                    setAddCart(false);
                                                                    purgCant();
                                                                }}
                                                            >
                                                                Aceptar
                                                            </button>
                                                        </div>
                                                        : null
                                                }
                                            </>
                                        ))
                                    }

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default ProductsMobile;