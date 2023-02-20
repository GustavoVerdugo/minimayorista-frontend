import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { saveOrder } from '../helpers/useOrders';

export default function MobilePayments() {
  const router = useRouter();
  useEffect(() => {
    router.replace('minimayorista://check')
  }, [])
  return (
    <div></div>
  )
}
