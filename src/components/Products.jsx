import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useRef, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBullhorn, faCartPlus, faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-regular-svg-icons"
import Pagination from './Pagination';
import { DataContext } from '../context/DataContext';

const Products = () => {
    const { productos,saveProduct,loading } = useContext(DataContext);
    const aboutRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [addCart, setAddCart] = useState(false);
    const [detail, setDetail] = useState([]);

    const products = [
        { id: 1, name: 'Arveja', marca: 'Minuto verde', precio: 190, oferta: 110, agotado: false, img: "https://minimayorista.cl/wp-content/uploads/2020/07/arvejas-intertagro-minimayorista-600x599.jpg" },
        { id: 2, name: 'Atun', marca: 'Angelmo', precio: 140, oferta: 99, agotado: false, img: "https://minimayorista.cl/wp-content/uploads/2022/08/desmenuzado-angelmo-minimayorista-600x599.jpg" },
        { id: 3, name: 'Baby Ribs', marca: 'Super Cerdo', precio: 200, oferta: 180, agotado: false, img: "https://minimayorista.cl/wp-content/uploads/2020/08/baby-ribs.supercerdo.1-kilo-minimayorista-600x600.jpg.webp" },
        { id: 4, name: 'Carne Molida', marca: 'Especial', precio: 100, oferta: 70, agotado: false, img: "https://minimayorista.cl/wp-content/uploads/2020/04/molida-especial-minimayorista-300x300.jpg.webp" },
        { id: 5, name: 'Champiñones', marca: 'Minuto verde', precio: 190, oferta: 110, agotado: false, img: "https://minimayorista.cl/wp-content/uploads/2020/06/champiñon-kilo-minuto-verde-minimayorista-600x600.jpg.webp" },
        { id: 6, name: 'Cereal', marca: 'Colacao', precio: 80, oferta: 50, agotado: true, img: "https://minimayorista.cl/wp-content/uploads/2022/09/colacao-pillows-720grs-minimayorista-600x599.jpg.webp" },
    ]

    async function passVehiculoDetail(data) {
        await setDetail(data)
    }

    return (
        <>
            <section ref={aboutRef} id="products" className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                {
                    !loading ? 
                    productos.map((items) => (
                        <div className="w-44 h-fit bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" key={items.id}>
                            <a onClick={() => { setDetail([items]); setIsOpenDetail(!isOpenDetail) }}>
                                {!items.attributes.status_stock ?
                                    <span className='absolute bg-red-500 text-white p-2 rounded-sm text-lg'>Agotado</span>
                                    : false}
                                <img src={'http://localhost:1337'+items.attributes.imagen_principal.data.attributes.url} alt="Product" className="h-40 w-44 object-cover rounded-t-xl" />
                                <div className="px-4 pt-3 w-44">
                                    <span className="text-gray-400 mr-3 uppercase text-xs">{items.marca}</span>
                                    <p className="text-lg font-bold text-black truncate block capitalize">{items.attributes.marca.data.attributes.nombre}</p>
                                </div>
                            </a>
                            <div className="px-4 pb-3 w-44">
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold text-black cursor-auto my-3">${items.attributes.precio_oferta}</p>
                                    <del>
                                        <p className="text-sm text-gray-600 cursor-auto ml-2">${items.attributes.precio}</p>
                                    </del>
                                    <button className={!items.attributes.status_stock ? `ml-auto bg-gray-200 rounded-md p-2` : `ml-auto bg-blue rounded-md p-2 hover:bg-blue-strong`} disabled={items.attributes.status_stock}
                                        onClick={() => { passVehiculoDetail(items); setIsOpen(!isOpen) }}>
                                        <FontAwesomeIcon icon={faCartPlus} className='h-6 w-6 text-white' aria-hidden='true' />
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))
                    :null
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
                                    <h1>${detail}</h1>
                                    {
                                        
                                        detail.map((item) => (
                                            <>
                                                <Dialog.Title
                                                    as="h3"
                                                    className="flex flex-row justify-center text-lg font-bold leading-6 text-gray-900"
                                                >
                                                    ¿ Añadir "{item.attributes.nombre}" al Carrito ?
                                                </Dialog.Title>
                                                <div className="mt-8">
                                                    <img
                                                        src={'http://localhost:1337'+item.attributes.imagen_principal.data.attributes.url}
                                                        className="w-full h-full object-center object-cover group-hover:opacity-75 rounded-lg"
                                                    />
                                                    <div className='flex flex-row justify-center items-center mt-8'>
                                                        <div className='bg-transparent flex flex-row justify-center items-center rounded-lg border-2 border-gray-700'>
                                                            <FontAwesomeIcon icon={faMinus} className='w-5 h-5' aria-hidden="true" />
                                                        </div>
                                                        <span className='mx-4 font-bold text-lg'>1</span>
                                                        <div className='bg-transparent flex flex-row justify-center items-center rounded-lg border-2 border-gray-700'>
                                                            <FontAwesomeIcon icon={faPlus} className='w-5 h-5' aria-hidden="true" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-row justify-evenly mt-10">
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border-gray-dark bg-transparent border-2 px-4 py-2 text-sm font-medium text-black"
                                                        onClick={() => { setIsOpen(false) }}
                                                    >
                                                        Cancelar
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue px-4 py-2 text-sm font-medium text-white hover:bg-blue-strong"
                                                        onClick={() => { setIsOpen(false) }}
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
                                                        src={'http://localhost:1337'+item.attributes.imagen_principal.data.attributes.url}
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
                                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue px-4 py-2 text-sm font-medium text-white hover:bg-blue-strong"
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