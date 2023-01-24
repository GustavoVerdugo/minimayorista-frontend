import React, { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';

const PersonalData = () => {
    return (
        <div className="mt-8">
            <img
                src={''}
                className="w-full h-full object-center object-cover group-hover:opacity-75 rounded-lg"
            />
            <div className='flex flex-col justify-center items-center mt-8'>
                <p className="text-lg font-bold text-black cursor-auto my-3">${10}</p>
                <del>
                    <p className="text-sm text-gray-600 cursor-auto">${10}</p>
                </del>
            </div>
        </div>
    )
}

export default PersonalData;