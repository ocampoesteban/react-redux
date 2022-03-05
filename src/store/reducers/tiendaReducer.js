import { AGREGAR, ELIMINAR } from '../action/buttonAction.js';

const estadoInicial = {
  productos: [
    { id: 1, nombre: 'Producto A' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' },
    { id: 4, nombre: 'Producto 4' },
    { id: 5, nombre: 'Producto 5' },
  ],
  carrito: [],
};

function actualizarCantidad(id, carrito, operacion) {
  const copyVar = [...carrito];
  copyVar.map((element) => {
    if (element.id == id)
      operacion === 'increase' ? element.cantidad++ : element.cantidad--;
  });
  return copyVar;
}

export default function reducer(estado = estadoInicial, accion) {
  if (estado.carrito.length == 0 && accion.type == 'ELIMINAR_PRODUCTO') {
    return {
      ...estado,
      carrito: [],
    };
  }
  const { id, nombre } = accion;
  let nuevoCarrito = [...estado.carrito];
  switch (accion.type) {
    case ELIMINAR:
      let { id: renameId, cantidad } =
        nuevoCarrito.filter((element) => element.id === id)[0] || {};

      if (cantidad === 1) {
        const getIndex = nuevoCarrito.findIndex(
          (value) => value.id === renameId
        );
        nuevoCarrito.splice(getIndex, 1);
      } else {
        nuevoCarrito = actualizarCantidad(id, nuevoCarrito, 'decrease');
      }

      return {
        ...estado,
        carrito: nuevoCarrito,
      };
    case AGREGAR:
      const yaExiste =
        nuevoCarrito.filter((productoC) => {
          return productoC.id === id;
        }).length > 0;

      if (yaExiste) {
        let incrementValue = actualizarCantidad(id, nuevoCarrito, 'increase');
        nuevoCarrito = incrementValue;
      } else {
        nuevoCarrito.push({
          id,
          nombre,
          cantidad: 1,
        });
      }

      return {
        ...estado,
        carrito: nuevoCarrito,
      };

    default:
      return estado;
  }
}
