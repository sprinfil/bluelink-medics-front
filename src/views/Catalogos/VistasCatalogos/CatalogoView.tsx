import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DataTableServiciosCatalogo } from '@/components/components/DataTableServiciosCatalogo'


export const CatalogoView = ({ nombre, descripcion, endpoint }) => {
  return (
    <>
      <Card className='h-full'>
        <CardHeader>
          <CardTitle>{nombre}</CardTitle>
          <CardDescription>
            {descripcion}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTableServiciosCatalogo
            endpoint={endpoint}
          />
        </CardContent>
      </Card>
    </>
  )
}
