import { create } from 'zustand';


const ZustandServicioCatalogo = create((set) => ({
  accion: "",
  setAccion: (valor) => set({ accion: valor }),
}));

export default ZustandServicioCatalogo;
