import { Fragment, useContext, useEffect, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import Products from './Products'
import ProductsMobile from './ProductsMobile'
import { DataContext } from '../context/DataContext'
import { PROD } from "../config";
const qs = require('qs');

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
    {
        id: 'categorias',
        name: 'Categorias',
        options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: true },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Filters() {
    const { loading, categorias, marcas, saveFiltros, setSearching, saveProduct, savePagination, pagination } = useContext(DataContext);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    let initialValues = {
        categorias: '',
        marcas: '',
        page: 0
    }
    let query = null;
    const [filtros, setFiltros] = useState(initialValues);

    const handleCheckedCategoria = e => {
        let checks = document.getElementsByName('categoria');
        let arr = [];
        checks.forEach((item) => {
            if (item.checked === true) {
                arr.push(item.id)
            }
        })
        setFiltros({ ...filtros, 'categorias': arr })
    }
    const handleCheckedMarca = e => {
        let checks = document.getElementsByName('marca');
        let arr = [];
        checks.forEach((item) => {
            if (item.checked === true) {
                arr.push(item.id)
            }
        })
        setFiltros({ ...filtros, 'marcas': arr })
    }
    const getProductsByFilters = async () => {
        if (query != null) {
            setSearching(true);
            const response = await fetch(`${PROD}productos?${query}&populate=*&pagination[page]=1&pagination[pageSize]=15`)
            const data = await response.json()
            await saveProduct(data.data);
            await savePagination(data.meta.pagination.pageCount)
        } else {
            setSearching(true);
            const response = await fetch(`${PROD}productos?populate=*&pagination[page]=1&pagination[pageSize]=15`)
            const data = await response.json()
            await savePagination(data.meta.pagination.pageCount)
        }
    }
    const getData = async () => {
        await getProductsByFilters();
        setSearching(false);
    }
    const filter = () => {
        saveFiltros([filtros]);
        let filters = [filtros];
        if (filters[0]?.marcas.length > 0) {
            query = qs.stringify({
                filters: {
                    marca: {
                        id: {
                            $in: filters[0].marcas
                        }
                    },
                },
            }, {
                encodeValuesOnly: true,
            });
        } else if (filters[0]?.categorias.length > 0) {
            query = qs.stringify({
                filters: {
                    categorias: {
                        id: {
                            $in: filters[0].categorias
                        }
                    },
                },
            }, {
                encodeValuesOnly: true,
            });
        } else if (filters[0]?.marcas.length > 0 && filters[0]?.categorias.length > 0) {
            query = qs.stringify({
                filters: {
                    marca: {
                        id: {
                            $in: filters[0].marcas
                        }
                    },
                    categorias: {
                        id: {
                            $in: filters[0].categorias
                        }
                    },
                },
            }, {
                encodeValuesOnly: true,
            });
        } else {
            query = null
        }
        setMobileFiltersOpen(false);
        getData()
    }

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Filters */}
                                    <form className="mt-4 border-t border-gray-200">
                                        <h3 className="sr-only">Categorias</h3>
                                        <Disclosure as="div" key={1} className="border-t border-gray-200 px-4 py-6">
                                            {({ open }) => (
                                                <>
                                                    <h3 className="-mx-2 -my-3 flow-root">
                                                        <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                            <span className="font-medium text-gray-900">Categorias</span>
                                                            <span className="ml-6 flex items-center">
                                                                {open ? (
                                                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                                ) : (
                                                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-6">
                                                            {categorias.map((option) => (
                                                                <div key={option.id} className="flex items-center">
                                                                    <input
                                                                        id={`${option.id}`}
                                                                        name={`categoria`}
                                                                        defaultValue={option.id}
                                                                        type="checkbox"
                                                                        defaultChecked={false}
                                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                        onChange={handleCheckedCategoria}
                                                                    />
                                                                    <label
                                                                        htmlFor={`filter-${option.id}`}
                                                                        className="ml-3 text-sm text-gray-600"
                                                                    >
                                                                        {option.attributes.nombre}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>

                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div" key={2} className="border-t border-gray-200 px-4 py-6">
                                            {({ open }) => (
                                                <>
                                                    <h3 className="-mx-2 -my-3 flow-root">
                                                        <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                            <span className="font-medium text-gray-900">Marcas</span>
                                                            <span className="ml-6 flex items-center">
                                                                {open ? (
                                                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                                ) : (
                                                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-6">
                                                            {marcas.map((option) => (
                                                                <div key={option.id} className="flex items-center">
                                                                    <input
                                                                        id={`${option.id}`}
                                                                        name={`marca`}
                                                                        defaultValue={option.id}
                                                                        type="checkbox"
                                                                        defaultChecked={false}
                                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                        onChange={handleCheckedMarca}
                                                                    />
                                                                    <label
                                                                        htmlFor={`filter-${option.id}`}
                                                                        className="ml-3 text-sm text-gray-600"
                                                                    >
                                                                        {option.attributes.nombre}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>

                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <div className='flex justify-start' >
                                            <button type='button' className='flex justify-center items-center mt-5 bg-blue m-2 p-2 rounded-md text-white font-semibold text-lg w-1/2'
                                                onClick={() => { filter() }}>Filtrar</button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <main className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray pt-24 pb-6">
                        <h1 className="md:text-4xl font-bold tracking-tight text-gray-900">Productos</h1>

                        <div className="flex items-center">
                            {/* <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Ordenar
                                        <ChevronDownIcon
                                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-dark group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {sortOptions.map((option) => (
                                                <Menu.Item key={option.name}>
                                                    {({ active }) => (
                                                        <a
                                                            href={option.href}
                                                            className={classNames(
                                                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            {option.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu> */}
                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-dark hover:text-gray-dark sm:ml-6 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">

                                <Disclosure as="div" key={1} className="border-b border-gray-200 py-6">
                                    {({ open }) => (
                                        <>
                                            <h3 className="-my-3 flow-root">
                                                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                    <span className="font-medium text-gray-900">Categorias</span>
                                                    <span className="ml-6 flex items-center">
                                                        {open ? (
                                                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                        ) : (
                                                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </h3>
                                            <Disclosure.Panel className="pt-6">
                                                <div className="space-y-4">
                                                    {categorias.map((option) => (
                                                        <div key={option.id} className="flex items-center">
                                                            <input
                                                                id={`${option.id}`}
                                                                name={`categoria`}
                                                                defaultValue={option.id}
                                                                type="checkbox"
                                                                defaultChecked={false}
                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                onChange={handleCheckedCategoria}
                                                            />
                                                            <label
                                                                htmlFor={`filter-${option.id}`}
                                                                className="ml-3 text-sm text-gray-600"
                                                            >
                                                                {option.attributes.nombre}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div" key={2} className="border-b border-gray-200 py-6">
                                    {({ open }) => (
                                        <>
                                            <h3 className="-my-3 flow-root">
                                                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                    <span className="font-medium text-gray-900">Marcas</span>
                                                    <span className="ml-6 flex items-center">
                                                        {open ? (
                                                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                        ) : (
                                                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </h3>
                                            <Disclosure.Panel className="pt-6">
                                                <div className="space-y-4">
                                                    {marcas.map((option) => (
                                                        <div key={option.id} className="flex items-center">
                                                            <input
                                                                id={`${option.id}`}
                                                                name={`marca`}
                                                                defaultValue={option.id}
                                                                type="checkbox"
                                                                defaultChecked={false}
                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                onChange={handleCheckedMarca}
                                                            />
                                                            <label
                                                                htmlFor={`filter-${option.id}`}
                                                                className="ml-3 text-sm text-gray-600"
                                                            >
                                                                {option.attributes.nombre}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <div className='flex justify-start' >
                                    <button type='button' className='flex justify-center items-center mt-5 bg-blue m-2 p-2 rounded-md text-white font-semibold text-lg w-1/2'
                                        onClick={() => { filter() }}>Filtrar</button>
                                </div>
                            </form>

                            {/* Product grid */}
                            <div className="hidden md:block lg:col-span-3">
                                <Products />
                            </div>
                            <div className="block md:hidden">
                                <ProductsMobile />
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
