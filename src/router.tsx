import { Navigate, createBrowserRouter } from 'react-router-dom';
import { DefaultLayout } from './views/Layouts/DefaultLayout';
import { DashBoard } from './views/Layouts/DashBoard';
import { GuestLayout } from './views/Layouts/GuestLayout';
import { Login } from './views/Auth/Login';
import { NotFound } from './views/Layouts/NotFound';
import { Pacientes } from './views/Pacientes/Pacientes';
import { Catalogos } from './views/Catalogos/Catalogos';
import { VerPaciente } from './views/Pacientes/VerPaciente';


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/dashboard" />
            },
            {
                path: '/dashboard',
                element: <DashBoard />
            },
            {
                path: '/pacientes',
                element: <Pacientes />
            },
            {
                path: '/paciente/verPaciente',
                element: <VerPaciente />
            },
            {
                path: '/catalogos',
                element: <Catalogos />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
])
export default router;
