import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ServiciosCatalogo } from './views/ServiciosCatalogo'

const page = () => {
  const opciones = [
    {
      titulo: "Servicios",
      componente: <ServiciosCatalogo />,
      permiso: ""
    },

    {
      titulo: "Insumos",
      componente: <></>,
      permiso: ""
    }
  ]
  return (
    <div className='w-full '>
      <Tabs className='flex-grow h-[93vh] flex flex-col'>
        <TabsList>
          {opciones.map((opcion, index) => (
            <TabsTrigger key={index} value={opcion.titulo}>
              {opcion.titulo}
            </TabsTrigger>
          ))}
        </TabsList>
        {opciones.map((opcion, index) => (
          <TabsContent key={index} value={opcion.titulo}>
            {opcion.componente}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default page
