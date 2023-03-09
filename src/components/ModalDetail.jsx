import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBullhorn, faCartPlus, faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-regular-svg-icons";

export default function ModalDetail({ open, setOpen, data, cant, purgCant, saveCart, delCant, addCant, addCart, setAddCart }) {
    return (
        <>
            {

                open ?
                    data.map((item) => (
                        <div key={item.id} className="fixed z-30" aria-labelledby="modal-title" role="dialog" aria-modal="true" >
                            <div className="fixed inset-0 bg-gray-dark bg-opacity-75 transition-opacity"></div>

                            <div className="fixed inset-0 z-10 overflow-y-auto">
                                <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                    <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">
                                                        {item.attributes.nombre}</h3>
                                                    {
                                                        item.attributes.marca.data === null ?
                                                            <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-subtitle">
                                                                GENERICO</h3>
                                                            :
                                                            <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-subtitle">
                                                                {item.attributes.marca.data.attributes.nombre}</h3>
                                                    }
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
                                                                        onClick={() => { setOpen(false); }}
                                                                    >
                                                                        Seguir comprando
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className={!item.attributes.status_stock ? `inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-white` : `inline-flex justify-center rounded-md border border-transparent bg-blue px-4 py-2 text-sm font-medium text-white hover:bg-blue-strong`} disabled={!item.attributes.status_stock}
                                                                        onClick={() => { setAddCart(true); }}
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
                                                                        setOpen(false);
                                                                        setAddCart(false);
                                                                        purgCant();
                                                                    }}
                                                                >
                                                                    Aceptar
                                                                </button>
                                                            </div>
                                                            : null
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    ))
                    : <div></div>

            }
        </>

    )
}
