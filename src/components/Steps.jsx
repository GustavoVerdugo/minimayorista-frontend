import React, { useEffect, useState, useContext } from "react";
import { Dialog } from '@headlessui/react';
import { DataContext } from "../context/DataContext";
import Dropdown from "./Dropdown";
import { createOrder } from "../helpers/useOrders";
import { validateEmpty } from "../helpers/magics";

const Steps = ({ content, setModalVisible }) => {
  const { comunas, tiposEnvio } = useContext(DataContext);
  let initialValues = {
    estado: 'en proceso',
    subtotal: 0,
    total: 0,
    tipos_de_pago: 1,
    nota_cliente: '',
    productos: content,
    envio: 0,
    nombre: '',
    apellido: '',
    direccion: '',
    region: 'Metropolitana',
    ciudad: 'Santiago',
    comuna: '',
    email: '',
    telefono: '',
    precio_envio: 0
  }
  const [data, setData] = useState(initialValues);
  const [step, setStep] = useState(1);
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(true);
  const [active3, setActive3] = useState(true);
  const handleChange = (name, value) => {
    setData({ ...data, [name]: value })
  }
  const handleSteps = (level) => {
    setStep(level);
  }
  const handleSendOrder = () => {
    createOrder(data);
  }
  useEffect(() => {
    if (data.envio.id === 1) {
      handleChange('precio_envio', 0);
      handleChange('total', data.subtotal);
    }
    if (data.envio.id === 2) {
      let tp = data.subtotal + data.precio_envio;
      handleChange('total',tp)
    }
  }, [data.envio])
  useEffect(() => {
    if (data.comuna) {
      handleChange('precio_envio', parseInt(data.comuna.attributes.precio));
    }
  }, [data.comuna])
  useEffect(() => {
    let tp = 0;
    content.map((prods) => {
      tp = tp + (parseInt(prods.price) * prods.cant);
    });
    handleChange('subtotal', tp);
  }, [])
  useEffect(() => {
    validateEmpty(data, step, setActive, setActive2, setActive3);
  }, [data])
  return (
    <>
      {
        step === 1 ?
          <>
            <Dialog.Title
              as="h3"
              className="flex flex-col justify-center items-center text-lg font-semibold leading-6 "
            >
              <span className='text-gray-900'>Datos Personales</span>
            </Dialog.Title>
            <div className="mt-10">
              <div className="grid grid-cols-2 grid-rows-3 gap-4 justify-items-start">
                <div>
                  <label className="mr-4 text-gray-dark">Nombre</label>
                  <input className="p-2 outline-none rounded-md h-fit md:w-full text-base bg-gray-100" autoFocus={true}
                    onChange={nombre => handleChange('nombre', nombre.target.value)}
                    value={data.nombre} />
                </div>
                <div>
                  <label className="mr-4 text-gray-dark">Apellido</label>
                  <input className="p-2 outline-none rounded-md h-fit md:w-full text-base bg-gray-100"
                    onChange={apellido => handleChange('apellido', apellido.target.value)}
                    value={data.apellido} />
                </div>
                <div>
                  <label className="mr-4 text-gray-dark">Dirección</label>
                  <input className="p-2 outline-none rounded-md h-fit md:w-full text-base bg-gray-100"
                    onChange={direccion => handleChange('direccion', direccion.target.value)}
                    value={data.direccion} />
                </div>
                <div>
                  <label className="mr-4 text-gray-dark">Comuna</label>
                  <div style={{ width: 290 }}>
                  </div>
                  <Dropdown
                    data={comunas} onSelect={handleChange} field={'comuna'} sel={data.comuna} />
                </div>
                <div>
                  <label className="mr-4 text-gray-dark">Correo</label>
                  <input className="p-2 outline-none rounded-md h-fit md:w-full text-base bg-gray-100"
                    onChange={email => handleChange('email', email.target.value)}
                    value={data.email} />
                </div>
                <div>
                  <label className="mr-4 text-gray-dark">Celular</label>
                  <input className="p-2 outline-none rounded-md h-fit md:w-full text-base bg-gray-100"
                    onChange={telefono => handleChange('telefono', telefono.target.value)}
                    value={data.telefono} />
                </div>
              </div>
              <div className="flex flex-row justify-evenly items-center mt-8">
                <button className="p-2 text-white bg-red-500 rounded-md outline-none focus:border-gray-400"
                  onClick={() => { setModalVisible(false); }}>
                  Cancelar
                </button>
                <button className={active ? `bg-gray-200 rounded-md p-2` : `p-2 text-white bg-blue rounded-md outline-none focus:border-gray-400`}
                  disabled={active}
                  onClick={() => { handleSteps(2); }}>
                  Siguiente
                </button>
              </div>
            </div>
          </>
          : step === 2 ?
            <>
              <Dialog.Title
                as="h3"
                className="flex flex-col justify-center items-center text-lg font-semibold leading-6 "
              >
                <span className='text-gray-900'>Envio</span>
              </Dialog.Title>
              <div className="mt-10">
                <div className="grid grid-cols-1 grid-rows-1 gap-2 justify-items-center min-w-full">
                  <div className="w-96">
                    <label className="mr-4 text-gray-dark">Envío</label>
                    <Dropdown
                      data={tiposEnvio} onSelect={handleChange} field={'envio'} sel={data.envio} />
                  </div>
                  <div className="w-96">
                    <label className="mr-4 text-gray-dark">Nota especial</label>
                    <textarea id="message" rows="8" className="resize-none block p-2.5 w-full text-base text-gray-dark bg-gray-100 rounded-lg border border-gray-200"
                      onChange={nota_cliente => handleChange('nota_cliente', nota_cliente.target.value)} placeholder="Escribe algún comentario ..."></textarea>
                  </div>
                </div>
                <div className="flex flex-row justify-evenly items-center mt-8">
                  <button className="p-2 text-white bg-red-500 rounded-md outline-none focus:border-gray-400"
                    onClick={() => { handleSteps(1) }}>
                    Atras
                  </button>
                  <button className={active2 ? `bg-gray-200 rounded-md p-2` : `p-2 text-white bg-blue rounded-md outline-none focus:border-gray-400`}
                    disabled={active2}
                    onClick={() => { handleSteps(3); }}>
                    Siguiente
                  </button>
                </div>
              </div>
            </>
            : step === 3 ?
              <>
                <Dialog.Title
                  as="h3"
                  className="flex flex-col justify-center items-center text-lg font-semibold leading-6 "
                >
                  <span className='text-gray-900'>Confirmación de Pedido</span>
                </Dialog.Title>
                <div className="mt-10">
                  <div className='flex flex-col justify-center items-center mt-8 h-fit w-auto max-h-60 overflow-y-scroll'>
                    {
                      content.map((ct) => (
                        <div className='flex flex-row justify-start items-start h-fit bg-white rounded-md' key={ct.id}>
                          <div className='w-20 h-20 mr-4'>
                            <img src={ct.img} />
                          </div>
                          <div className='flex-shrink justify-center items-start w-60'>
                            <span className='text-gray-800 mr-2 uppercase text-xs'>{ct.name}</span>
                            <div className='flex-row justify-start items-start'>
                              <span className='text-gray-800 mr-3 uppercase text-sm font-semibold'>${parseInt(ct.price).toLocaleString('es-CL')}</span>
                              <span className='text-gray-800 mr-3 uppercase text-sm font-semibold'>X {ct.cant}</span>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  <div className='grid grid-rows-2 grid-cols-2 justify-items-center mt-8 h-fit'>
                    <div className='grid grid-rows-4 gap-0.5 justify-start w-auto h-fit bg-white rounded-md'>
                      <div className="flex flex-row justify-start w-auto h-fit">
                        <span className='text-gray-800 mr-2 text-sm font-medium'>{data.nombre} {data.apellido} </span>
                      </div>
                      <div className="flex flex-row justify-start w-auto h-fit">
                        <span className='text-gray-800 mr-2 text-sm font-medium'>{data.email}</span>
                      </div>
                      <div className="flex flex-row justify-start w-auto h-fit">
                        <span className='text-gray-800 mr-2 text-sm font-medium'>{data.telefono}</span>
                      </div>
                      <div className="flex flex-row justify-start w-auto h-fit">
                        <span className='text-gray-800 mr-2 text-sm font-medium'>{data.direccion}, {data.comuna.attributes.nombre}, {data.ciudad}</span>
                      </div>
                    </div>
                    <div className='grid grid-rows-4 gap-0.5 justify-start w-auto h-fit bg-white rounded-md'>
                      <div className="flex flex-row justify-start w-auto h-fit">
                        <span className='text-gray-800 mr-2 text-sm font-medium'>Subtotal: ${parseInt(data.subtotal).toLocaleString('es-CL')}</span>
                      </div>
                      <div className="flex flex-row justify-start w-auto h-fit">
                        <span className='text-gray-800 mr-2 text-sm font-medium'>Envio: ${parseInt(data.precio_envio).toLocaleString('es-CL')}</span>
                      </div>
                      <div className="flex flex-row justify-start w-auto h-fit">
                        <span className='text-gray-800 mr-2 text-sm font-medium'>Total: ${parseInt(data.total).toLocaleString('es-CL')}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-evenly items-center mt-8">
                    <button className="p-2 text-white bg-red-500 rounded-md outline-none focus:border-gray-400"
                      onClick={() => { handleSteps(2) }}>
                      Atras
                    </button>
                    <button className="p-2 text-white bg-blue rounded-md outline-none focus:border-gray-400"
                      onClick={() => handleSendOrder()}>
                      Pagar
                    </button>
                  </div>
                </div>
              </>
              : null
      }
    </>
  )
}

export default Steps;