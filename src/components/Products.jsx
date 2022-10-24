import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBullhorn, faCartPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
    return (
        <section className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2020/07/arvejas-intertagro-minimayorista-600x599.jpg" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
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


            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2022/08/desmenuzado-angelmo-minimayorista-600x599.jpg" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
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

            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2020/08/baby-ribs.supercerdo.1-kilo-minimayorista-600x600.jpg.webp" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
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


            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2020/04/molida-especial-minimayorista-300x300.jpg.webp" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
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

            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2020/06/champiñon-kilo-minuto-verde-minimayorista-600x600.jpg.webp" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
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

            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <span className='absolute bg-red-500 text-white p-2 rounded-sm text-lg'>Agotado</span>
                    <img src="https://minimayorista.cl/wp-content/uploads/2022/09/colacao-pillows-720grs-minimayorista-600x599.jpg.webp" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
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
            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2020/07/arvejas-intertagro-minimayorista-600x599.jpg" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
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


            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2022/08/desmenuzado-angelmo-minimayorista-600x599.jpg" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
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

            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2020/08/baby-ribs.supercerdo.1-kilo-minimayorista-600x600.jpg.webp" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
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


            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2020/04/molida-especial-minimayorista-300x300.jpg.webp" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
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

            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://minimayorista.cl/wp-content/uploads/2020/06/champiñon-kilo-minuto-verde-minimayorista-600x600.jpg.webp" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
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

            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <span className='absolute bg-red-500 text-white p-2 rounded-sm text-lg'>Agotado</span>
                    <img src="https://minimayorista.cl/wp-content/uploads/2022/09/colacao-pillows-720grs-minimayorista-600x599.jpg.webp" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
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
    )
}

export default Products;