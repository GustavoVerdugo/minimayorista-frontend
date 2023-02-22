import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBullhorn, faCartPlus, faMinus, faPlus, faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-regular-svg-icons";

export default function ModalCart({ cart, delCant, sumCant, deleteProduct, refresh, closeModal, setModalVisible, setModalCartVisible, modalCartVisible }) {
  const data = cart.sort((a, b) => a.name.localeCompare(b.name))
  return (
    <>
      {

        modalCartVisible ?
          <div key={2} className="fixed z-30" aria-labelledby="modal-title" role="dialog" aria-modal="true" >
            <div className="fixed inset-0 bg-gray-dark bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-center">
                        <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-subtitle">
                          Tu Carrito</h3>
                        <div className="mt-8 h-80 max-h-96 overflow-y-scroll">
                          {
                            data.length > 0 ?

                              data.map((ct) => (
                                <div className='flex flex-row justify-start items-center w-full bg-white rounded-md max-w-xl' key={ct.id}>
                                  <div className='w-14 h-14 md:w-20 md:h-20'>
                                    <img src={ct.img} alt={ct.img} />
                                  </div>
                                  <div className='flex flex-row justify-between items-center ml-2 w-full'>
                                    <div className='flex flex-col justify-center items-start'>
                                      <span className='text-gray-800 mr-2 uppercase text-xs'>{ct.name}</span>
                                      <div className='flex flex-row justify-start items-start'>
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
                                            );
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
                                      <button
                                        onClick={() => {
                                          deleteProduct(ct.id);
                                          refresh();
                                        }}>
                                        <FontAwesomeIcon icon={faTrashCan} className='h-6 w-6 text-red-500' aria-hidden='true' />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))
                              : <h1 className="text-black">Tu carrito está vacio</h1>
                          }
                        </div>
                        <div className="flex flex-row justify-evenly items-center mt-8 p-3">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border-gray-dark bg-transparent border-2 px-4 py-2 text-sm font-medium text-black"
                            onClick={() => { setModalCartVisible(false); }}
                          >
                            Cancelar
                          </button>
                          <button
                            type="button"
                            className={cart.length <= 0 ? `ml-2 bg-gray-200 rounded-md p-2`
                              : `inline-flex justify-center rounded-md border border-transparent bg-blue px-4 py-2 text-sm font-medium text-white hover:bg-blue-strong`}
                            disabled={cart.length > 0 ? false : true}
                            onClick={() => { closeModal(false); setModalVisible(true); }}
                          >
                            Realizar Pedido
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div >
          : <div></div>

      }
    </>

  )
}
