import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useRef, useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBullhorn, faCartPlus, faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-regular-svg-icons"
import Pagination from './Pagination';
import { DataContext } from '../context/DataContext';
import useFetchCustom from '../helpers/useFetchCustom';
const qs = require('qs');

const Products = () => {
    const { productos, loading, filters, saveQuery, saveCart } = useContext(DataContext);
    const aboutRef = useRef();
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
    }, [filters])

    return (
        <>
            <section ref={aboutRef} id="products" className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                {
                    !loading ?



                        productos.map((items) => (
                            <div className="w-48 h-fit bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" key={items.id}>
                                <button onClick={() => { setDetail([items]); setIsOpenDetail(!isOpenDetail) }}
                                    disabled={!items.attributes.status_stock}>
                                    {!items.attributes.status_stock ?
                                        <span className='relative -left-12 top-0 bg-red-500 text-white p-2 rounded-sm text-lg'>Agotado</span>
                                        : false}
                                    <img src={'http://localhost:1337' + items.attributes.imagen_principal.data.attributes.url} alt="Product" className="h-40 w-44 object-cover rounded-t-xl" />
                                    <div className="px-4 pt-3 w-44">
                                        <span className="text-gray-400 mr-3 uppercase text-xs">{items.attributes.marca.data.attributes.nombre}</span>
                                        <p className="text-base font-bold text-black truncate block capitalize">{items.attributes.nombre}</p>
                                    </div>
                                </button>
                                <div className="px-4 pb-3 w-44">
                                    <div className="flex flex-row items-center">
                                        <p className="text-lg font-semibold text-black cursor-auto my-3">${parseInt(items.attributes.precio_oferta).toLocaleString('es-CL')}</p>
                                        <del>
                                            <p className="text-sm text-gray-600 cursor-auto ml-2">${parseInt(items.attributes.precio).toLocaleString('es-CL')}</p>
                                        </del>
                                        <button className={!items.attributes.status_stock ? `ml-2 bg-gray-200 rounded-md p-2` : `ml-2 bg-blue rounded-md p-2 hover:bg-blue-strong`} disabled={!items.attributes.status_stock}
                                            onClick={() => { setDetail([items]); setIsOpen(!isOpen) }}>
                                            <FontAwesomeIcon icon={faCartPlus} className='h-6 w-6 text-white' aria-hidden='true' />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))
                        : null
                }
            </section >
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
                                                        src={'http://localhost:1337' + item.attributes.imagen_principal.data.attributes.url}
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
                                                        onClick={() => { purgCant(); setIsOpen(false); }}
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
                                                        src={'http://localhost:1337' + item.attributes.imagen_principal.data.attributes.url}
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
                                                                <div className='bg-transparent flex flex-row justify-center items-center rounded-lg border-2 border-gray-700'>
                                                                    <FontAwesomeIcon icon={faMinus} className='w-5 h-5' aria-hidden="true" />
                                                                </div>
                                                                <span className='mx-4 font-bold text-lg'>1</span>
                                                                <div className='bg-transparent flex flex-row justify-center items-center rounded-lg border-2 border-gray-700'>
                                                                    <FontAwesomeIcon icon={faPlus} className='w-5 h-5' aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                    }
                                                </div>

                                                {
                                                    addCart ?
                                                        <div className="flex flex-row justify-evenly mt-10">
                                                            <button
                                                                type="button"
                                                                className="inline-flex justify-center rounded-md border-gray-dark bg-transparent border-2 px-4 py-2 text-sm font-medium text-black"
                                                                onClick={() => { setAddCart(false); }}
                                                            >
                                                                Cancelar
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue px-4 py-2 text-sm font-medium text-white hover:bg-blue-strong"
                                                                onClick={() => { setIsOpenDetail(false); setAddCart(false); }}
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

export default Products;