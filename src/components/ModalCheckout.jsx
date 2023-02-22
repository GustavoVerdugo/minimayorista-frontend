import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBullhorn, faCartPlus, faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-regular-svg-icons";
import Steps from './Steps';

export default function ModalCheckout({ content, setModalVisible, modalVisible }) {
  return (
    <>
      {

        modalVisible ?
          <div key={1} className="fixed z-30" aria-labelledby="modal-title" role="dialog" aria-modal="true" >
            <div className="fixed inset-0 bg-gray-dark bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-center">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Steps content={content} setModalVisible={setModalVisible} />
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
