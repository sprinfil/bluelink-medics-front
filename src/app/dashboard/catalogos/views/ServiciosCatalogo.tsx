import {
  DoubleContainer,
  Seccion1,
  Seccion2
} from '@/components/bluelinkComponents/DoubleContainer'

import React from 'react'

export const ServiciosCatalogo = () => {
  return (
    <div className='h-full flex-grow px-1'>
      <DoubleContainer>
        <Seccion1>
          <div>
            <p>Table</p>
          </div>
        </Seccion1>
        <Seccion2>
          <div>
            <p>Form</p>
          </div>
        </Seccion2>
      </DoubleContainer>
    </div>
  )
}
