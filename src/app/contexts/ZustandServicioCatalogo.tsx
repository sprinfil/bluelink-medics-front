import { create } from 'zustand';


const ZustandServicioCatalogo = create((set) => ({
  editando: false,
  setEditando: (valor) => set({ editando: valor }),

}));

export default ZustandServicioCatalogo;
