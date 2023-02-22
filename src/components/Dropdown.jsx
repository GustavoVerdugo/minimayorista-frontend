import React, { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition, Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown({ data, onSelect, field, sel }) {
  const [selected, setSelected] = useState({
    id: 0,
    attributes: {
      nombre: '--- seleccione una opción ---',
      precio: 0
    }
  });
  return (
    <>
{/*       <div classNames="relative mt-1">
        <select class="relative w-full h-10 cursor-default rounded-md border border-gray-200 bg-white py-2 pl-3 pr-10 text-left shadow-sm sm:text-sm"
          tabindex="-1" role="listbox" onChange={index => { console.log(index.currentTarget.value) }}>
          <option class="text-gray-900 relative cursor-default select-none py-2 pl-3" value="" disabled selected role="option">
            <div class="flex items-center">
              <span class="font-normal ml-3 block truncate">-- Selecciona una opción ---</span>
            </div>
          </option>
          {
            data.map((item) => (
              <option key={item.id} class="text-gray-900 relative cursor-default select-none py-2 pl-3" id={item.id} role="option"
                value={item}>
                <div class="flex items-center">
                  <span class="font-normal ml-3 block truncate">{item.attributes.nombre}</span>
                </div>
              </option>
            ))
          }
        </select>
      </div> */}
      <Listbox value={selected} onChange={(index) => { setSelected(index); field != null ? onSelect(field, index) : null; console.log(index) }}>
        {({ open }) => (
          <>
            <div className="mt-0.5 relative">
              <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-100 bg-white py-1.5 pl-3 pr-10 text-left shadow-sm sm:text-sm">
                <span className="flex items-center">
                  <span className="ml-3 block truncate">{selected.attributes.nombre}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-50 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  <Listbox.Option
                    key={0}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-gray-100' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={{
                      id: 0,
                      attributes: {
                        nombre: '--- seleccione una opción ---',
                        precio: 0
                      }
                    }}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            --- Seleccione una opción ---
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-gray-dark' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                  {data.map((item) => (
                    <Listbox.Option
                      key={item.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'bg-gray-100' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span
                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                              {item.attributes.nombre}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-gray-dark' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </>
  )
}

{/* <Listbox value={selected} onChange={(index) => { setSelected(index); field != null ? onSelect(field, index) : null; }}>
            {({ open }) => (
                <>
                    <div className="mt-0.5 relative">
                        <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-100 bg-white py-1.5 pl-3 pr-10 text-left shadow-sm sm:text-sm">
                            <span className="flex items-center">
                                <span className="ml-3 block truncate">{selected.attributes.nombre}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-50 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                <Listbox.Option
                                    key={0}
                                    className={({ active }) =>
                                        classNames(
                                            active ? 'bg-gray-100' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-3 pr-9'
                                        )
                                    }
                                    value={{
                                        id: 0,
                                        attributes: {
                                            nombre: '--- seleccione una opción ---',
                                            precio: 0
                                        }
                                    }}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <div className="flex items-center">
                                                <span
                                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                >
                                                    --- Seleccione una opción ---
                                                </span>
                                            </div>

                                            {selected ? (
                                                <span
                                                    className={classNames(
                                                        active ? 'text-gray-dark' : 'text-indigo-600',
                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                    )}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                                {data.map((item) => (
                                    <Listbox.Option
                                        key={item.id}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'bg-gray-100' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={item}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <span
                                                        className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                    >
                                                        {item.attributes.nombre}
                                                    </span>
                                                </div>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-gray-dark' : 'text-indigo-600',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox> */}