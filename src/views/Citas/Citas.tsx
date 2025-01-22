import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import { eventPropGetter, messages } from '@/lib/CitasService'
import 'moment';
moment.locale('es');

export const Citas = () => {
  const localizer = momentLocalizer(moment);
  moment.updateLocale('es', {
    weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    weekdaysMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
    months: [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ],
    monthsShort: [
      'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
      'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ],
  });

  const handleSelectSlot = (slotInfo: any) => {
    const { start, end } = slotInfo;
    console.log('Fecha y hora seleccionada:', {
      inicio: moment(start).format('YYYY-MM-DD HH:mm'),
      fin: moment(end).format('YYYY-MM-DD HH:mm')
    });
  };

  return (
    <div className='h-full'>
      <Card className='h-full'>
        <CardHeader>
          <CardTitle>Citas</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className='h-[80vh]' >
          <Calendar
            localizer={localizer}
            // events={events}
            // onSelectEvent={(e => { handleSelectEvent(e, verEventoRef, setSelectedEvent) })}
            style={{ height: '100%' }}
            eventPropGetter={eventPropGetter}
            messages={messages} // Traducciones al español
            onSelectSlot={handleSelectSlot}
            selectable={true}
          />
        </CardContent>
      </Card>
    </div>
  )
}
