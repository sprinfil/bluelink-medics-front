import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { CatalogoView, ServiciosCatalogo } from './VistasCatalogos/CatalogoView'

export const Catalogos = () => {
    return (
        <Tabs defaultValue="servicios" className="flex flex-col flex-grow">
            <TabsList className="w-full">
                <TabsTrigger value="servicios">Servicios</TabsTrigger>
                <TabsTrigger value="insumos">Insumos</TabsTrigger>
            </TabsList>
            <TabsContent value="servicios" className='h-full'>
                <CatalogoView
                    nombre={"Servicios"}
                    descripcion={"Catalogo de servicios"}
                    endpoint={"/servicios"}
                />
            </TabsContent>
            <TabsContent value="insumos">
                <Card>
                    <p>Insumos</p>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
