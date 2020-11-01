import { Persona } from '../models/Persona';
// Method to Assign Region to Persona

export const assignRegion = (persona: Persona): string => {
  const comuna = String(persona.direccion.comuna);
  const region = 'placeholder';
  return region;
};
