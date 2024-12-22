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
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '../ui/button'
import { BsPencilSquare } from "react-icons/bs";


const PacienteDashBoard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
      <Card>
        <CardHeader>
          <CardTitle className='flex flex-wrap justify-between items-center'>Información principal <Button>Editar<BsPencilSquare/></Button></CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-2 gap-3'>
            <div className=' '>
              <p>Nombre</p>
              <p>Dirección</p>
              <p>Teléfono</p>
              <p>Edad</p>
            </div>
            <div className='text-muted-foreground'>
              <p>Miguel Angel Murillo Jaimes</p>
              <p>Bahia de la paz</p>
              <p>6241294731</p>
              <p>24</p>
            </div>

          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Últimos tratamientos</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>

  )
}

export default PacienteDashBoard