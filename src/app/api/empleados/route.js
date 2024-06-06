import { NextResponse } from "next/server";

/**
 * En este Route definimos dos funciones, GET y POST, que nos permiten obtener y crear un nuevo empleado.
 */

// Para obtener la lista de empleados
export async function GET() {
  let ListEmpleados = [
    { id: 1, nombre: "Jorge", edad: 30, profesion: "Desarrollador" },
    { id: 2, nombre: "Javier", edad: 25, profesion: "Developer" },
    { id: 3, nombre: "Carlos", edad: 35, profesion: "Backend" },
    { id: 4, nombre: "Luis", edad: 40, profesion: "Frontend" },
    { id: 5, nombre: "Pedro", edad: 45, profesion: "Analista" },
  ];

  // return NextResponse.redirect("http://localhost:3001/saludar");
  return NextResponse.json(ListEmpleados);
}

// Función POST para crear un nuevo empleado
export async function POST() {
  let nuevoEmpleado = { id: 6, nombre: "Urian", edad: 30, profesion: "Fullstack" };
  return NextResponse.json(nuevoEmpleado);
}
