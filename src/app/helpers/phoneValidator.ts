import { Persona } from '../models/Persona';

// Method to Validate RUT

export const validatePhone = (persona: Persona): boolean => {
  const rawPhone = String(persona.telefono);
  const phoneRegex = /\d{11}/;
  if (!phoneRegex.test(rawPhone)) {
    return false;
  }
  return true;
};
