import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBullhorn, faCartPlus, faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import Pagination from './Pagination';
import { DataContext } from '../context/DataContext';
import Modal from './Modal';
import ModalDetail from './ModalDetail';
const qs = require('qs');

const ProductsMobile = () => {
    const { productos, loading, filters, saveQuery, saveCart, searching } = useContext(DataContext);
    const [addCart, setAddCart] = useState(false);
    const [detail, setDetail] = useState([]);
    const [cant, setCant] = useState(1);
    const [open, setOpen] = useState(false);
    const [OpenDetail, setOpenDetail] = useState(false);

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
            <section id="products-mobile" className='w-full mx-1 flex flex-col'>
                {
                    !loading ?
                        !searching ?
                            productos.map((items) => (
                                <div key={items.id} className='flex flex-row justify-around w-full h-fit bg-white rounded-md'>
                                    <button className='flex flex-row w-full h-fit bg-white rounded-md'
                                        onClick={() => { setDetail([items]); setOpenDetail(!OpenDetail) }}
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
                                            onClick={() => { setDetail([items]); setOpen(true); }}>
                                            <FontAwesomeIcon icon={faCartPlus} className='h-6 w-6 text-white' aria-hidden='true' />
                                        </button>
                                    </div>
                                </div>
                            ))
                            :
                            <div className='grid h-screen place-items-center col-span-full'>
                                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                            </div>
                        : null
                }
            </section>
            <div className="flex justify-end">
                <Pagination />
            </div>

            {/* modales */}
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

export default ProductsMobile;