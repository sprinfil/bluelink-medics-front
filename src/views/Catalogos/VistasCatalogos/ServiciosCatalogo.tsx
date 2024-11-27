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


export const ServiciosCatalogo = () => {
  return (
    <>
      <Card className='h-full'>
        <CardHeader>
          <CardTitle>Servicios</CardTitle>
          <CardDescription>
            Catalogo de servicios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTableServiciosCatalogo />
        </CardContent>
      </Card>
    </>
  )
}
