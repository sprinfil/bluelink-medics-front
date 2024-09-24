import { create } from 'zustand';


const ZustandServicioCatalogo = create((set) => ({
  editando: false,
  setEditando: (valor) => set({ editando: valor }),

  creando: false,
  setCreando: (valor) => set({ creando: valor }),

}));

export default ZustandServicioCatalogo;
