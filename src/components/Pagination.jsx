import { useContext, useEffect, useState, Fragment } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { DataContext } from '../context/DataContext';
import { PROD } from "../config";
const Pagination = () => {
    const { loading, savePagination, pagination, query, page, setPage, saveProduct, setSearching } = useContext(DataContext);
    async function useCallProductsPagination() {
        setSearching(true)
        if (page > 0 && page < pagination) {
            if (query != null) {
                const response = await fetch(`${PROD}productos?${query}&populate=*&pagination[page]=${page}&pagination[pageSize]=15`)
                const data = await response.json()
                await saveProduct(data.data);
                await savePagination(data.meta.pagination.pageCount)
                setSearching(false);
            } else {
                const response = await fetch(`${PROD}productos?populate=*&pagination[page]=${page}&pagination[pageSize]=15`)
                const data = await response.json()
                await saveProduct(data.data);
                await savePagination(data.meta.pagination.pageCount)
                setSearching(false);
            }

        }
    }
    useEffect(() => {
        useCallProductsPagination();
    }, [page])
    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            {
                !loading ?
                    pagination > 1 ?
                        <div>
                            <div className="flex-1 flex justify-between sm:hidden">
                                <button
                                    disabled={page === 1 ? true : false}
                                    className="relative inline-flex items-center px-4 py-2 border border-gray-200 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:text-gray bg-gray"
                                    onClick={() => { setPage(page - 1) }}
                                >
                                    Anterior
                                </button>
                                <button
                                    disabled={page === pagination ? true : false}
                                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-200 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                    onClick={() => { setPage(page + 1) }}
                                >
                                    Siguiente
                                </button>
                            </div>
                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                        <button
                                            disabled={page === 1 ? true : false}
                                            onClick={() => { setPage(page - 1) }}
                                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 disabled:text-gray bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                                        >
                                            <span className="sr-only">Anterior</span>
                                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                            <span>Anterior</span>
                                        </button>
                                        {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                                        <button
                                            disabled={page === pagination ? true : false}
                                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 disabled:text-gray bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                                            onClick={() => { setPage(page + 1) }}
                                        >
                                            <span className="sr-only">Siguiente</span>
                                            <span>Siguiente</span>
                                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        : null
                    : null
            }

        </div>
    )
}

export default Pagination;