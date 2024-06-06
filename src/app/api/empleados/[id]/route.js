import { NextResponse } from "next/server";

/**
 * En este Route definimos dos funciones GET, DELETE y PUT, que nos permiten obtener, borrar y actualizar un nuevo empleado.
 * Tanto request como context son necesarios para definir las funciones GET, DELETE y PUT. Actuamente el unico valor de context es 'params' el cual es un objeto que contiene los parametros de la ruta dinamica para la url actual.
 */
export async function GET(request, context) {
  const { params } = context;
  const { id } = context.params;
  const team = context.params.id;
  console.log(params);
  console.log(team);
  console.log(id);

  // return NextResponse.json({ id: 1, nombre: "Jorge" });
  return NextResponse.json("Obteniendo un empleado");
}

export async function DELETE(request, context) {
  const { id } = context.params;
  console.log(id);

  return NextResponse.json("Eliminando un empleado");
}

export async function PUT(request, context) {
  const { id } = context.params;
  console.log(id);
  return NextResponse.json("Actualizando un empleado");
}
