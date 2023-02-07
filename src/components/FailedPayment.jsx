import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { saveOrder } from '../helpers/useOrders';

export default function FailedPayment() {
  useEffect(() => {
    console.log('mounted')
  },[])
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 min-h-full">
      <div className="bg-white p-6 min-w-full min-h-screen  md:mx-auto">
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Upss ... Pago Erroneo!</h3>
          <p className="text-gray-600 my-2">Vuelve a intentar!</p>
          <div className="py-10 text-center">
            <Link href="/" >
              <button className="px-12 bg-blue hover:bg-blue-strong text-white font-semibold py-3 rounded-md">
                Volver a la tienda
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
