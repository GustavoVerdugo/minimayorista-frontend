import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useRef, useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBullhorn, faCartPlus, faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-regular-svg-icons"
import Pagination from './Pagination';
import { DataContext } from '../context/DataContext';
import useFetchCustom from '../helpers/useFetchCustom';
import Modal from './Modal';
import ModalDetail from './ModalDetail';
const qs = require('qs');

const Products = () => {
    const { productos, loading, filters, saveQuery, saveCart, searching } = useContext(DataContext);
    const aboutRef = useRef();
    const [open, setOpen] = useState(false);
    const [OpenDetail, setOpenDetail] = useState(false);
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


    return (
        <>
            <section ref={aboutRef} id="products" className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                {
                    !loading ?

                        !searching ?

                            productos.map((items) => (
                                <div key={items.id} className="w-48 h-fit bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                    <div className='flex flex-col justify-center items-start absolute'>
                                        {!items.attributes.status_stock ?
                                            <span className='bg-red-500 text-white p-2 rounded-sm text-lg'>Agotado</span>
                                            : false}
                                    </div>
                                    <button onClick={() => { setDetail([items]); setOpenDetail(!OpenDetail) }}
                                        disabled={!items.attributes.status_stock}
                                        className="flex flex-col justify-center items-center">
                                        <img src={items.attributes.imagen_principal.data.attributes.url} alt="Product" className="h-40 w-44 object-cover rounded-t-xl" />
                                        <div className="px-4 pt-3 w-44">
                                            {
                                                items.attributes.marca.data === null ?
                                                    <span className="text-gray-400 mr-3 uppercase text-xs">GENERICO</span>
                                                    :
                                                    <span className="text-gray-400 mr-3 uppercase text-xs">{items.attributes.marca.data.attributes.nombre}</span>
                                            }
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
                                                onClick={() => { setDetail([items]); setOpen(!open) }}>
                                                <FontAwesomeIcon icon={faCartPlus} className='h-6 w-6 text-white' aria-hidden='true' />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            ))
                            :
                            <div className='grid h-screen place-items-center col-span-full'>
                                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                            </div>
                        : null
                }
            </section >
            <div className="flex justify-end">
                <Pagination />
            </div>

            <Modal open={open} setOpen={setOpen} data={detail}
                cant={cant} purgCant={purgCant} saveCart={saveCart}
                delCant={delCant} addCant={addCant} />
            <ModalDetail open={OpenDetail} setOpen={setOpenDetail} data={detail}
                cant={cant} purgCant={purgCant} saveCart={saveCart}
                delCant={delCant} addCant={addCant} addCart={addCart}
                setAddCart={setAddCart} />
        </>
    )
}

export default Products;