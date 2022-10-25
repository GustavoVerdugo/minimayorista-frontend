import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBullhorn, faCartPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

const Products = () => {

    const products = [
        {id: 1, name: 'Arveja', marca: 'Minuto verde', precio: 190, oferta: 110},
        {id: 2, name: 'Atun', marca: 'Angelmo', precio: 140, oferta: 99},
    ]

    return (
        <section className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

            <div className="w-44 h-fit bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2020/07/arvejas-intertagro-minimayorista-600x599.jpg" alt="Product" className="h-40 w-44 object-cover rounded-t-xl" />
                    <div className="px-4 pt-3 w-44">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                    </div>
                </a>
                <div className="px-4 pb-3 w-44">
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                        </del>
                        <button className="ml-auto bg-orange-500 rounded-md p-2"
                            onClick={() => { alert("hola") }}>
                            <FontAwesomeIcon icon={faCartPlus} className='h-6 w-6 text-white' aria-hidden='true' />
                        </button>
                    </div>
                </div>

            </div>


            <div className="w-44 h-fit bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2022/08/desmenuzado-angelmo-minimayorista-600x599.jpg" alt="Product" className="h-40 w-44 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-44">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                        <div className="flex items-center">
                            <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                            <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                            </del>
                            <div className="ml-auto bg-orange-500 rounded-md p-2">
                                <FontAwesomeIcon icon={faCartPlus} className='h-6 w-6 text-white' aria-hidden='true' />
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div className="w-44 h-fit bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2020/08/baby-ribs.supercerdo.1-kilo-minimayorista-600x600.jpg.webp" alt="Product" className="h-40 w-44 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-44">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                        <div className="flex items-center">
                            <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                            <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                            </del>
                            <div className="ml-auto bg-orange-500 rounded-md p-2">
                                <FontAwesomeIcon icon={faCartPlus} className='h-6 w-6 text-white' aria-hidden='true' />
                            </div>
                        </div>
                    </div>
                </a>
            </div>


            <div className="w-44 h-fit bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2020/04/molida-especial-minimayorista-300x300.jpg.webp" alt="Product" className="h-40 w-44 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-44">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                        <div className="flex items-center">
                            <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                            <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                            </del>
                            <div className="ml-auto bg-orange-500 rounded-md p-2">
                                <FontAwesomeIcon icon={faCartPlus} className='h-6 w-6 text-white' aria-hidden='true' />
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div className="w-44 h-fit bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2020/06/champiñon-kilo-minuto-verde-minimayorista-600x600.jpg.webp" alt="Product" className="h-40 w-44 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-44">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                        <div className="flex items-center">
                            <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                            <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                            </del>
                            <div className="ml-auto bg-orange-500 rounded-md p-2">
                                <FontAwesomeIcon icon={faCartPlus} className='h-6 w-6 text-white' aria-hidden='true' />
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            {/* Agotado */}
            <div className="w-44 h-fit bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <span className='absolute bg-red-500 text-white p-2 rounded-sm text-lg'>Agotado</span>
                    <img src="https://minimayorista.cl/wp-content/uploads/2022/09/colacao-pillows-720grs-minimayorista-600x599.jpg.webp" alt="Product" className="h-40 w-44 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-44">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                        <div className="flex items-center">
                            <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                            <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                            </del>
                            <button className="ml-auto bg-gray-400 rounded-md p-2" disabled="true">
                                <FontAwesomeIcon icon={faCartPlus} className='h-6 w-6 text-white' aria-hidden='true' />
                            </button>
                        </div>
                    </div>
                </a>
            </div>


            {/* Borrar */}
            <div className="w-44 h-fit bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2020/07/arvejas-intertagro-minimayorista-600x599.jpg" alt="Product" className="h-40 w-44 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-44">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                        <div className="flex items-center">
                            <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                            <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                            </del>
                            <div className="ml-auto bg-orange-500 rounded-md p-2">
                                <FontAwesomeIcon icon={faCartPlus} className='h-6 w-6 text-white' aria-hidden='true' />
                            </div>
                        </div>
                    </div>
                </a>
            </div>


            <div className="w-44 h-fit bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2022/08/desmenuzado-angelmo-minimayorista-600x599.jpg" alt="Product" className="h-40 w-44 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-44">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                        <div className="flex items-center">
                            <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                            <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                            </del>
                            <div className="ml-auto bg-orange-500 rounded-md p-2">
                                <FontAwesomeIcon icon={faCartPlus} className='h-6 w-6 text-white' aria-hidden='true' />
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div className="w-44 h-fit bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2020/08/baby-ribs.supercerdo.1-kilo-minimayorista-600x600.jpg.webp" alt="Product" className="h-40 w-44 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-44">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                        <div className="flex items-center">
                            <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                            <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                            </del>
                            <div className="ml-auto bg-orange-500 rounded-md p-2">
                                <FontAwesomeIcon icon={faCartPlus} className='h-6 w-6 text-white' aria-hidden='true' />
                            </div>
                        </div>
                    </div>
                </a>
            </div>


            <div className="w-44 h-fit bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2020/04/molida-especial-minimayorista-300x300.jpg.webp" alt="Product" className="h-40 w-44 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-44">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                        <div className="flex items-center">
                            <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                            <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                            </del>
                            <div className="ml-auto bg-orange-500 rounded-md p-2">
                                <FontAwesomeIcon icon={faCartPlus} className='h-6 w-6 text-white' aria-hidden='true' />
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div className="w-44 h-fit bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2020/06/champiñon-kilo-minuto-verde-minimayorista-600x600.jpg.webp" alt="Product" className="h-40 w-44 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-44">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                        <div className="flex items-center">
                            <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                            <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                            </del>
                            <div className="ml-auto bg-orange-500 rounded-md p-2">
                                <FontAwesomeIcon icon={faCartPlus} className='h-6 w-6 text-white' aria-hidden='true' />
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            {/* Agotado */}
            <div className="w-44 h-fit bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <span className='absolute bg-red-500 text-white p-2 rounded-sm text-lg'>Agotado</span>
                    <img src="https://minimayorista.cl/wp-content/uploads/2022/09/colacao-pillows-720grs-minimayorista-600x599.jpg.webp" alt="Product" className="h-40 w-44 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-44">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                        <div className="flex items-center">
                            <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                            <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                            </del>
                            <button className="ml-auto bg-gray-400 rounded-md p-2" disabled="true">
                                <FontAwesomeIcon icon={faCartPlus} className='h-6 w-6 text-white' aria-hidden='true' />
                            </button>
                        </div>
                    </div>
                </a>
            </div>
            {/* Borrar */}
        </section>


        /* modales */

    )
}

export default Products;