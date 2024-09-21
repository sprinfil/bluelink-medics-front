"use client"
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import React from 'react'

const DoubleContainer = ({ children }) => {
  return (
    <div className='h-full flex-grow px-1'>
      <div className='h-full flex w-full'>
        {children}
      </div>
    </div>
  );
};

const Seccion1 = ({ children }) => {

  const toggleTableContainer = () => {

    let containers = document.getElementsByClassName('tableContainer');

    Array.from(containers).forEach((container) => {

      const currentState = container.getAttribute('data-state');

      if (currentState === 'open') {
        container.setAttribute('data-state', 'closed');
      } else {
        container.setAttribute('data-state', 'open');
      }
    });
  }

  return (
    <>
      <div className='w-[20%] border'>
        {children}
      </div>
      <div className='w-[25px] border cursor-pointer hover:bg-muted transition-all duration-100 flex items-center mr-3 justify-center'
        onClick={() => { toggleTableContainer() }}
      >
        <ArrowLeftIcon />
      </div>
    </>
  );
};

const Seccion2 = ({ children }) => {
  return (
    <div className='flex-grow h-full border'>
      {children}
    </div>
  );
};

export { DoubleContainer, Seccion1, Seccion2 };
