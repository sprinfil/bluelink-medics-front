'use client'
import React from 'react'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FcManager, FcPlanner } from "react-icons/fc";
import { BsGearWideConnected } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { FcViewDetails, FcFlowChart, FcButtingIn } from "react-icons/fc";
import { FaUser } from "react-icons/fa6";
import { CgLogOff } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { ModeToggle } from '../ui/ModeToggle';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { ArrowLeft } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '../ui/button';

export const MenuSuperior = () => {
  const router = useRouter();

  const opciones = [
    {
      titulo: "Pacientes",
      icono: <FcManager className='w-[15px] h-[15px]' />,
      permiso: "",
      ruta: "",
      subOpciones: [
        {
          titulo: "Pacientes",
          icono: <FcManager className='w-[15px] h-[15px]' />,
          permiso: "",
          ruta: "",
        },
        {
          titulo: "Citas",
          icono: <FcPlanner className='w-[15px] h-[15px]' />,
          permiso: "",
          ruta: "",
        },
      ]
    },
    {
      titulo: "Monitores",
      icono: <SlScreenDesktop className='w-[15px] h-[15px]' />,
      permiso: "",
      ruta: "",
      subOpciones: [
        {
          titulo: "Monitores",
          icono: <SlScreenDesktop className='w-[15px] h-[15px]' />,
          permiso: "",
          ruta: "",
        },
      ]
    },
  ]

  const toggle_menu_telefono = () => {
    let menu_telefono = document.getElementById('menu_telefono');
    let currentState = menu_telefono?.getAttribute('data-state');
    if (currentState === 'cerrado') {
      menu_telefono?.setAttribute('data-state', 'abierto');
    } else {
      menu_telefono?.setAttribute('data-state', 'cerrado');
    }
  }

  return (
    <>
      <Menubar className='h-[6vh] relative md:flex hidden'>
        {opciones.map((opcion, index) => (
          <>
            <MenubarMenu>
              <MenubarTrigger className='h-full text-[15px] font-normal' key={index}><span className='mr-3'>{opcion.icono}</span>{opcion.titulo}</MenubarTrigger>
              <MenubarContent className=''>
                {
                  opcion?.subOpciones?.length > 0 ?
                    <>
                      {opcion?.subOpciones?.map((subOpcion, index) => (
                        <MenubarItem className='h-[5vh] text-[15px] hover:bg-background'>
                          {subOpcion.titulo}
                          <MenubarShortcut>{subOpcion.icono}</MenubarShortcut>
                        </MenubarItem>
                      ))}
                    </>
                    :
                    <>
                    </>
                }
              </MenubarContent>
            </MenubarMenu>
          </>
        ))}
        <div className='absolute right-[1vw]'>

          <MenubarMenu>
            <MenubarTrigger className='h-full text-[20px] font-normal'><BsGearWideConnected className='w-[15px] h-[15px] m-1' />
              <MenubarContent>
                <MenubarItem className='h-[5vh] text-[14px]' onClick={() => { router.push("/dashboard/catalogos") }}>
                  Catalogos
                  <MenubarShortcut><FcViewDetails className='w-[15px] h-[15px]' /></MenubarShortcut>
                </MenubarItem>
                <MenubarItem className='h-[5vh] text-[14px]'>
                  Roles
                  <MenubarShortcut><FcFlowChart className='w-[15px] h-[15px]' /></MenubarShortcut>
                </MenubarItem>
                <MenubarItem className='h-[5vh] text-[14px]'>
                  Usuarios
                  <MenubarShortcut><FaUser className='w-[15px] h-[15px]' /></MenubarShortcut>
                </MenubarItem>
                <MenubarItem className='h-[5vh] text-[14px]'>
                  Opciones generales
                  <MenubarShortcut><BsGearWideConnected className='w-[15px] h-[15px]' /></MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarTrigger>
          </MenubarMenu>

        </div>
        <div className='absolute right-[80px] flex gap-3 items-center text-[15px]'>
          <p>Sprinfil</p>
          <Avatar className='w-[30px] h-[30px]' >
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className='p-[5.5px] transition-all hover:text-red-500 hover:bg-muted border rounded-md cursor-pointer' onClick={() => { router.push("/") }}>
            <CgLogOff className='w-[23px] h-[23px] ' />
          </div>
          <ModeToggle />
        </div>
      </Menubar>

      {/* MENU MOVIL */}
      <div className='md:hidden flex h-[7vh] border-b relative'>
        <div className='h-full flex items-center ml-4 z-20 cursor-pointer' onClick={() => { toggle_menu_telefono(); }} >
          <HamburgerMenuIcon className='h-7 w-7' />
        </div>
        <div className='absolute right-[80px] flex gap-3 items-center text-[15px] h-full'>
          <ModeToggle />
          <div className='p-[5.5px] transition-all hover:text-red-500 hover:bg-muted border rounded-md cursor-pointer' onClick={() => { router.push("/") }}>
            <CgLogOff className='w-[23px] h-[23px] ' />
          </div>
          <p>Sprinfil</p>
          <Avatar className='w-[30px] h-[30px]' >
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className='absolute right-[1vw] h-full flex items-center'>
          <Menubar className='border-none'>
            <MenubarMenu>
              <MenubarTrigger className='h-full text-[20px] font-normal'><BsGearWideConnected className='w-[15px] h-[15px] m-1' />
                <MenubarContent>
                  <MenubarItem className='h-[5vh] text-[14px]' onClick={() => { router.push("/dashboard/catalogos") }}>
                    Catalogos
                    <MenubarShortcut><FcViewDetails className='w-[15px] h-[15px]' /></MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem className='h-[5vh] text-[14px]'>
                    Roles
                    <MenubarShortcut><FcFlowChart className='w-[15px] h-[15px]' /></MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem className='h-[5vh] text-[14px]'>
                    Usuarios
                    <MenubarShortcut><FaUser className='w-[15px] h-[15px]' /></MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem className='h-[5vh] text-[14px]'>
                    Opciones generales
                    <MenubarShortcut><BsGearWideConnected className='w-[15px] h-[15px]' /></MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>

        <div data-state="cerrado" className='bg-background overflow-hidden absolute h-[100vh] data-[state=abierto]:w-full data-[state=cerrado]:w-0 transition-all duration-500 ease' id='menu_telefono'>
          <div className='mt-[50px] px-10 min-w-[100vw]'>
            <Accordion type="multiple" className="w-full">
              {opciones.map((opcion, index) => (
                <AccordionItem value={opcion.titulo} key={index}>
                  <AccordionTrigger>{opcion.titulo}</AccordionTrigger>
                  <AccordionContent className='block'>
                    {opcion.subOpciones.map((subOpcion, index) => (
                      <div className='my-3 bg-muted p-4 flex justify-between cursor-pointer' onClick={toggle_menu_telefono}>
                        {subOpcion.titulo}
                        {subOpcion.icono}
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>

      </div>
    </>


  )
}
