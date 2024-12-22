import React from 'react'
import { CatalogoView } from '../Catalogos/VistasCatalogos/CatalogoView'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DataTablePacientes } from '@/components/components/DataTablePacientes'



export const Pacientes = () => {
  return (
    <div className='h-full'>
      <Card className=''>
        <CardHeader>
          <CardTitle>Pacientes</CardTitle>
          <CardDescription>
            Listado de pacientes
          </CardDescription>
        </CardHeader>
        <CardContent className=''>
          <DataTablePacientes />
        </CardContent>
      </Card>
    </div>
  )
}
