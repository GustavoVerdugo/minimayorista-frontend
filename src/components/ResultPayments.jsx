import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { saveOrder } from '../helpers/useOrders';

export default function ResultPayments() {
  useEffect(() => {
    saveOrder(JSON.parse(localStorage.getItem('payload')));
  }, [])
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 min-h-full">
      <div className="bg-white p-6 min-w-full min-h-screen  md:mx-auto">
        <svg viewBox="0 0 24 24" className="text-blue w-16 h-16 mx-auto my-6">
          <path fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
          </path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Pago Exitoso!</h3>
          <p className="text-gray-600 my-2">Gracias por tu compra!</p>
          <p> Ten un gran día!  </p>
          <div className="py-10 text-center">
            <Link href="/" >
              <button className="px-12 bg-blue hover:bg-blue-strong text-white font-semibold py-3 rounded-md">
                Volver al Inicio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
