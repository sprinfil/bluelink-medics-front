export const messages = {
    allDay: 'Todo el día',
    previous: 'Atrás',
    next: 'Siguiente',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Hora',
    event: "Cita",
    noEventsInRange: 'No hay eventos en este rango.',
    showMore: (total) => `+ Ver más (${total})`,
};

export const eventPropGetter = (event) => {
    let style = {
        backgroundColor: 'lightblue', // Color por defecto
        color: 'black',
        borderRadius: '5px',
        border: 'none',
    };

    // Aplicar estilos según condiciones
    if (event.status === 'pendiente') {
        style.backgroundColor = 'orange';

    } else if (event.status === 'completada') {
        style.backgroundColor = 'green';
        style.color = 'white';
    } else if (event.status === 'cancelada') {
        style.backgroundColor = 'red';
        style.color = 'white';
    }
    else if (event.status === 'confirmada') {
        style.backgroundColor = 'blue';
        style.color = 'white';
    }

    return {
        style,
    };
};