import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { FaQuestionCircle } from 'react-icons/fa'
import icono from "../../assets/tooth.svg"

export const ReferenciaOdontograma = () => {
  return (
    <div className='ml-auto'>
      <Sheet>
        <SheetTrigger className='ml-auto'><Button className='ml-auto' variant={"link"}><FaQuestionCircle /></Button></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Referencia de odontograma</SheetTitle>
            <SheetDescription>
              Estos son los iconos que representan los tratamientos realizados a los dientes
            </SheetDescription>
            <div className='flex flex-col gap-2'>

              <div className='flex gap-3 items-center'>
                <img src={icono} alt="" className='h-[50px] w-[50px]' />
                <p>Caries</p>
              </div>

              <div className='flex gap-3 items-center'>
                <img src={icono} alt="" className='h-[50px] w-[50px]' />
                <p>Caries</p>
              </div>

            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
