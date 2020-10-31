export class Persona {
  id: number;
  nombre: string;
  apellido: string;
  telefono: number;
  rut: string;
  direccion: {
    calle: string;
    numero: number;
    comuna: {
      id: number;
      nombre: string;
    };
  };
  activo: number;
  validRut?: boolean;
  validPhone?: boolean;
}
