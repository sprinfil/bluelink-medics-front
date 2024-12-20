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

export const Pacientes = () => {
  return (
    <div>
      <Card className='h-full'>
        <CardHeader>
          <CardTitle>Pacientes</CardTitle>
          <CardDescription>
            Listado de pacientes
          </CardDescription>
        </CardHeader>
        <CardContent>

        </CardContent>
      </Card>
    </div>
  )
}
