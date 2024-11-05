"use client"
import React, { useEffect, useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea'
import { Switch } from '../ui/switch'
import ZustandServicioCatalogo from '@/app/contexts/ZustandServicioCatalogo'
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { submitForm, useSubmitForm } from '@/app/lib/ServicioCatalogoService'
const formSchema = z.object({
  nombre: z.string().min(2).max(50),
  descripcion: z.string().min(0).max(200),
  estado: z.boolean(),
})

export const ServicioCatalogoForm = ({ selectedServicio, updateData, updateSelected }) => {

  const { accion, setAccion } = ZustandServicioCatalogo();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: selectedServicio.nombre,
      descripcion: selectedServicio.descripcion,
      estado: selectedServicio.estado,
    },
  })

  const {handleSubmit, response} = useSubmitForm(updateData, updateSelected, selectedServicio, form );

  function onSubmit(values: z.infer<typeof formSchema>) {
    handleSubmit(values, selectedServicio);
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <fieldset disabled={accion == "editando" || accion == "crear" ? false : true}>
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (

              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre" {...field} />
                </FormControl>
                <FormDescription>
                  Este es el nombre del servicio
                </FormDescription>
                <FormMessage />
              </FormItem>

            )}
          />
          <FormField
            control={form.control}
            name="descripcion"
            render={({ field }) => (

              <FormItem>
                <FormLabel>Descripcion</FormLabel>
                <FormControl>
                  <Textarea placeholder="Descripcion" {...field} />
                </FormControl>
                <FormDescription>
                  Esta es la descripcion del servicio (opcional).
                </FormDescription>
                <FormMessage />
              </FormItem>

            )}
          />
          <FormField
            control={form.control}
            name="estado"
            render={({ field }) => (

              <FormItem>
                <FormLabel>Estado</FormLabel>
                <FormControl>
                  <div>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </div>
                </FormControl>
                <FormDescription>
                  Activo / Inactivo
                </FormDescription>
                <FormMessage />
              </FormItem>

            )}
          />

          {
            (accion == "editando" || accion == "crear") &&
            <>
              <Button
                onClick={() => {
                  setAccion('ver');
                  form.reset({ ...selectedServicio })
                }}
                className='mt-5' variant={'outline'}>Cancelar</Button>
              <Button type="submit" className='mt-5 ml-3 ' >Aceptar</Button>
            </>
          }
        </fieldset>
      </form>
    </Form>
  )
}
