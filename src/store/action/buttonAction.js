const AGREGAR = 'AGREGAR_AL_CARRITO';
const ELIMINAR = 'ELIMINAR_PRODUCTO';

const agregar = () => ({
  type: AGREGAR,
});

const eliminar = () => {
  return {
    type: ELIMINAR,
  };
};

export { AGREGAR, agregar, eliminar, ELIMINAR };
