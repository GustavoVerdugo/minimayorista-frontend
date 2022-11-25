import { useContext, useEffect, useState, Fragment } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
const Pagination = () => {
    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div>
                <div className="flex-1 flex justify-between sm:hidden">
                    <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 border border-gray-200 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Anterior
                    </a>
                    <a
                        href="#"
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-200 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Siguiente
                    </a>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <button
                                disabled={false}
                                onClick={() => {}}
                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 disabled:text-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                <span className="sr-only">Anterior</span>
                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                <span>Anterior</span>
                            </button>
                            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                            <button
                                disabled={false}
                                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 disabled:text-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                                onClick={() => {}}
                            >
                                <span className="sr-only">Siguiente</span>
                                <span>Siguiente</span>
                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination;