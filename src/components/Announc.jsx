import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBullhorn, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Announc = () => {
    const [active, setActive] = useState(true);
    return (
        <>
            {
                active ?
                    <div className="bg-orange-600">
                        < div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8" >
                            <div className="flex flex-wrap items-center justify-between">
                                <div className="flex w-0 flex-1 items-center">
                                    <span className="flex rounded-lg bg-orange-500 p-2">
                                        <FontAwesomeIcon icon={faBullhorn} className="h-6 w-6 text-white" aria-hidden="true" />
                                    </span>
                                    <p className="ml-3 truncate font-medium text-white">
                                        <span className="md:hidden">Nuestra app ya esta disponible!</span>
                                        <span className="hidden md:inline text-base">Buenas noticias! Nuestra app ya está disponible en App Store y Play Store. Descargala ya!</span>
                                    </p>
                                </div>
                                <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                                    <div className="flex items-center justify-start">
                                        <img className="w-40 h-24 drop-shadow-lg" src="http://assets.corelabs.cl/images/app-store.svg" alt='app-store'/>
                                        <img className="w-40 h-24 drop-shadow-lg" src="http://assets.corelabs.cl/images/google-play.svg" alt='play store' />
                                    </div>
                                </div>
                                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                                    <button
                                        type="button"
                                        className="-mr-1 flex rounded-md p-2 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                                        onClick={() => { setActive(!active) }}
                                    >
                                        <span className="sr-only">Dismiss</span>
                                        <FontAwesomeIcon icon={faXmark} className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div >
                    </div >
                    : null
            }
        </>
    )
}

export default Announc;
