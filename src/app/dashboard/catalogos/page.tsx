import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const page = () => {
  const opciones = [
    {
      titulo:"servicios",
      
    }
  ]
  return (
    <div className='w-full'>
      <Tabs defaultValue="account" className="">
        <TabsList>
          <TabsTrigger value="account">Servicios</TabsTrigger>
          <TabsTrigger value="password">Insumos</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  )
}

export default page
