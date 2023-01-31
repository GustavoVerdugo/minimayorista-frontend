import React, { useEffect } from 'react'
import { confirmPay } from '../services/PayService'

export default function ResultPayments() {
  useEffect(() => {
    confirmPay();
  }, [])
  return (
    <div>Gracias por tu compra!</div>
  )
}
