import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useNavigate } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FormPaciente } from '@/components/components/FormPaciente'
import PacienteDashBoard from '@/components/components/PacienteDashBoard'


export const VerPaciente = () => {
  const navigate = useNavigate();
  return (
    <Card className='h-full'>
      <CardHeader>
        <Breadcrumb>

          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className='cursor-pointer' onClick={() => navigate("/pacientes")}>
                Pacientes
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Miguel Angel Murillo Jaimes</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

      </CardHeader>
      <CardContent>
        <Tabs defaultValue="principal" className="w-full">
          <TabsList>
            <TabsTrigger value="principal">Principal</TabsTrigger>
            <TabsTrigger value="odontograma">Odontograma</TabsTrigger>
            <TabsTrigger value="consentimiento">Consentimiento</TabsTrigger>
          </TabsList>
          <TabsContent value="principal">
            {/* <CardTitle className='mb-5'>Miguel Angel Murillo Jaimes</CardTitle> */}
            {/* <CardDescription className='my-2'>Detalles del paciente</CardDescription> */}
            <PacienteDashBoard />
          </TabsContent>
          <TabsContent value="odontograma">

          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
