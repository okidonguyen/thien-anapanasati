import React, { useContext, useEffect, useState } from 'react';
import { AppContext, AppContextStateT } from '../contexts/AppContext';

interface ButtonProps {
    title: string;
    typeTimes: string;
    defaultValue: number;
}

export default function CounterInput({
    title,
    typeTimes,
    // defaultValue,
}: ButtonProps) {
    const {appState, updateState} = useContext(AppContext) as AppContextStateT;

    // Tăng
    const increment = () => {
        updateState({...appState, timer:appState.timer+60})
    };

    // Giảm
    const decrement = () => {
        updateState({...appState, timer:appState.timer-60})
    };

    return (
        <div className='custom-number-input h-10 inline-block pt-3'>
            <label className='text-gray-700 text-sm font-semibold w-full'>
                {title} ({typeTimes})
            </label>
            <div className='flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1'>
                <button
                    onClick={decrement}
                    className=' bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none'>
                    <span className='m-auto text-2xl font-thin'>−</span>
                </button>
                <input
                    type='number'
                    className='focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none'
                    name='custom-input-number'
                    readOnly
                    value={Number(appState.timer)/60}></input>
                <button
                    onClick={increment}
                    className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer'>
                    <span className='m-auto text-2xl font-thin'>+</span>
                </button>
            </div>
        </div>
    );
}
