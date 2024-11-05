"use client"
import { useEffect, useState } from "react";
import ZustandServicioCatalogo from "../contexts/ZustandServicioCatalogo";
import { ToastAction } from "@/components/ui/toast"

export function useSubmitForm(updateData, updateSelected, selectedServicio, form) {

  const [response, setResponse] = useState(""); // Usa useState para response
  const [loading, setLoading] = useState(true);
  const { accion, setAccion } = ZustandServicioCatalogo();

  const handleSubmit = ({ values, selectedServicio }) => {
    try {
      if (accion === 'editando') {
        updateData((prev) => {
          return prev.map((servicio) => {
            if (servicio?.id === selectedServicio?.id) {
              updateSelected(values);
              return values;
            } else {
              return servicio;
            }
          });
        });
        setAccion('ver');
        setResponse("Editado correctamente"); // Actualiza el estado de response
      }
    } catch (e) {
      setResponse("Ocurrió un error: " + e); // Actualiza el estado de response en caso de error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (accion == 'crear') {
      updateSelected({});
      form.reset({
        nombre: '',
        descripcion: '',
        estado: true,
      })
    }
  }, [accion])

  useEffect(() => {
    form?.reset({ ...selectedServicio });
  }, [selectedServicio])

  return { handleSubmit, response };
}