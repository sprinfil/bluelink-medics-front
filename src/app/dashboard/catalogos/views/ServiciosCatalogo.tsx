"use client"
import {
  DoubleContainer,
  Seccion1,
  Seccion2
} from '@/components/bluelinkComponents/DoubleContainer'
import { ServicioCatalogoForm } from '@/components/Forms/ServicioCatalogoForm'
import { ServiciosDataTable, columns } from '@/components/Tables/ServiciosDataTable'
import { Pencil2Icon } from '@radix-ui/react-icons'
import ZustandServicioCatalogo from '@/app/contexts/ZustandServicioCatalogo'

import React, { useEffect, useState } from 'react'

export const ServiciosCatalogo = () => {

  const { accion, setAccion } = ZustandServicioCatalogo();
  const [selectedServicio, setSelectedServicio] = useState({});
  const [servicios, setServicios] = useState([]);

  const data = [
    {
      id: "1a2b3c4d",
      nombre: "Limpieza dental",
      descripcion: "Eliminación de sarro y placa dental para prevenir enfermedades.",
      estado: true,
    },
    {
      id: "2b3c4d5e",
      nombre: "Blanqueamiento dental",
      descripcion: "Tratamiento estético para aclarar el tono de los dientes.",
      estado: true,
    },
    {
      id: "3c4d5e6f",
      nombre: "Ortodoncia",
      descripcion: "Corrección de la posición de los dientes y la mandíbula.",
      estado: true,
    },
    {
      id: "4d5e6f7g",
      nombre: "Implantes dentales",
      descripcion: "Reemplazo de dientes faltantes con raíces artificiales.",
      estado: true,
    },
    {
      id: "5e6f7g8h",
      nombre: "Endodoncia",
      descripcion: "Tratamiento de conductos para eliminar infecciones del nervio dental.",
      estado: true,
    },
    {
      id: "6f7g8h9i",
      nombre: "Extracción de muelas del juicio",
      descripcion: "Remoción de muelas del juicio que causan problemas o dolor.",
      estado: true,
    },
    {
      id: "7g8h9i0j",
      nombre: "Incrustaciones dentales",
      descripcion: "Restauraciones indirectas para dientes dañados.",
      estado: true,
    },
    {
      id: "8h9i0j1k",
      nombre: "Carillas dentales",
      descripcion: "Laminados finos que se colocan en la superficie de los dientes.",
      estado: true,
    },
    {
      id: "9i0j1k2l",
      nombre: "Tratamiento de encías",
      descripcion: "Tratamiento para enfermedades periodontales y gingivitis.",
      estado: true,
    },
    {
      id: "0j1k2l3m",
      nombre: "Brackets",
      descripcion: "Aparatos dentales para corregir la alineación de los dientes.",
      estado: true,
    },
    {
      id: "1k2l3m4n",
      nombre: "Prótesis dentales",
      descripcion: "Dientes artificiales para sustituir los faltantes.",
      estado: true,
    },
    {
      id: "2l3m4n5o",
      nombre: "Selladores dentales",
      descripcion: "Aplicación de selladores en las superficies de los dientes para prevenir caries.",
      estado: true,
    },
    {
      id: "3m4n5o6p",
      nombre: "Fluorización",
      descripcion: "Aplicación de flúor para fortalecer el esmalte dental.",
      estado: true,
    },
    {
      id: "4n5o6p7q",
      nombre: "Tratamiento de halitosis",
      descripcion: "Tratamiento para eliminar el mal aliento.",
      estado: true,
    },
    {
      id: "5o6p7q8r",
      nombre: "Terapia miofuncional",
      descripcion: "Ejercicios para mejorar la función muscular oral.",
      estado: true,
    },
  ];

  useEffect(() => {
    setServicios(data);
  }, [])

  return (
    <div className='h-full flex-grow px-1'>
      <DoubleContainer>
        <Seccion1>
          <div className='px-5 flex-grow '>
            <ServiciosDataTable
              columns={columns}
              data={servicios}
              set={setSelectedServicio}
            />
          </div>
        </Seccion1>
        <Seccion2>
          <div className='h-full'>
            <div className='w-full px-4 py-3 flex items-center gap-5'>
              <p>{selectedServicio?.nombre}</p>
              {
                accion != "editando" && selectedServicio?.nombre &&
                <>
                  <Pencil2Icon className=' w-[20px] h-[20px] cursor-pointer transition-all'
                    onClick={() => {
                      setAccion('editando');
                    }}
                  />
                </>
              }
            </div>

            <div className='px-4 mt-5'>
              <ServicioCatalogoForm selectedServicio={selectedServicio} updateData={setServicios} updateSelected={setSelectedServicio} />
            </div>

          </div>
        </Seccion2>
      </DoubleContainer>
    </div >
  )
}
