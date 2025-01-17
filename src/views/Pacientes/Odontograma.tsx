import { Diente } from '@/components/components/Diente'
import { Button } from '@/components/ui/button'
import React from 'react'

export const Odontograma = () => {
  return (
    <>
      <div className='w-full border border-primary rounded-md'>
        <Button variant={"link"}>Exportar PDF</Button>
      </div>
      <div className='w-full flex flex-col items-center justify-center mt-10 overflow-auto'>
        <div className='flex'>
          <div className='flex border-r-[2px] border-b-[2px] border-black py-5'>
            {
              [...Array(8)].map((_, index) => (
                <Diente
                  key={index}
                  numero={index}
                />
              ))
            }
          </div>
          <div className='flex border-b-[2px] border-b-black py-5'>
            {
              [...Array(8)].map((_, index) => (
                <Diente
                  key={index}
                  numero={index}

                />
              ))
            }
          </div>
        </div>

        <div className='flex'>
          <div className='flex border-r-[2px] border-r-black py-5'>
            {
              [...Array(8)].map((_, index) => (
                <Diente
                  key={index}
                  numero={index}
                  ImgOrientation='bottom'
                />
              ))
            }
          </div>
          <div className='flex py-5'>
            {
              [...Array(8)].map((_, index) => (
                <Diente
                  key={index}
                  numero={index}
                  ImgOrientation='bottom'
                />
              ))
            }
          </div>
        </div>
      </div>

    </>

  )
}
