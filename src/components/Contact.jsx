import React, { useRef, useState } from 'react';
import mail_logo from '../assets/mail_logo.svg'
import emailjs from '@emailjs/browser';
import emailkey from '../../public/emailkey';
import { CheckCircleIcon } from '@heroicons/react/24/outline'



const Contact = () => {
    const [send, setSend] = useState(false);
    const [loading, setLoading] = useState(false);
    const [valid, setValid] = useState(true);
    const form = useRef();
    const sendEmail = (e) => {
        setLoading(true);
        e.preventDefault();
        emailjs.sendForm(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, form.current, emailkey.PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setSend(true);
                setLoading(false);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        setTimeout(() => {
            setSend(false);
        }, 3000)
    };
    function isEmail(e) {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regEmail.test(e.target.value)){
          setValid(false)
        } else {
            setValid(true)
        }
    }
    return (
        <div className="w-screen flex flex-row justify-center mt-5 mb-10">
            <div className="hidden md:flex max-w-xs mr-10">
                <img src={`https://assets.corelabs.cl/images/subscribe-minimayorista.svg`} />
            </div>
            {!send ?
                <div className="flex flex-col justify-center md:ml-10 lg:w-96">
                    <div className='text-center mb-5'>
                        <span className='text-2xl font-semibold text-gray-dark'>
                            Recibe las mejores ofertas en tu correo !
                        </span>
                    </div>
                    <form className='flex flex-col justify-start' ref={form} onSubmit={sendEmail}>
                        <input placeholder='Nombre' type={'text'} name='name' className='m-2 p-2 rounded-md h-fit md:w-full text-lg bg-gray-100 focus:outline-none' />
                        <input placeholder='Apellido' type={'text'} name='last_name' className='m-2 p-2 rounded-md h-fit md:w-full text-lg bg-gray-100 focus:outline-none' />
                        <input hidden name='from_name' value={'automotoraelias.cl'} />
                        <input placeholder='Correo' type={'text'} onChange={isEmail} name='email' className={`m-2 p-2 outline-none rounded-md h-fit md:w-full text-lg bg-gray-100 ${ valid ? 'focus:outline-none': 'focus:outline-red-500' }`} />
                        {!valid ? <span className='text-xs font-extralight text-red-500 ml-2'>Email Invalido</span> : null }
                        {/* <textarea placeholder='Mensaje' name='message' className='m-2 p-2 rounded-md h-64 md:w-full text-lg bg-gray-100 focus:outline-none resize-none' /> */}
                        <div className='flex text-center items-center'>
                            {!loading ?
                                <input type='submit' className="bg-blue m-2 p-2 rounded-md text-white font-semibold text-lg w-1/2" value={`Enviar`} />
                                :
                                <div className="flex justify-center items-center bg-blue m-2 p-2 rounded-md text-white font-semibold text-lg w-1/2">
                                    <div class="animate-spin rounded-full h-6 w-6 border-t-2 border-white"></div>
                                </div>}
                        </div>
                    </form>
                </div> :
                <div className="flex flex-row justify-center items-center md:ml-10 lg:w-96">
                    <div className='text-center mb-5'>
                        <span className='text-2xl font-semibold flex text-gray'>
                            <CheckCircleIcon className="h-9 w-9" aria-hidden="true" /><text>Correo Enviado</text>
                        </span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Contact;