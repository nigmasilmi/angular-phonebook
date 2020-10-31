import { Persona } from '../models/Persona';

// Method to Validate RUT

export const validateRut = (persona: Persona): boolean => {
  const rawRut = persona.rut;
  let accumulator = 0;
  let calcVerDigit;
  // data unifier, in case that there are dots in the string
  rawRut.replace('.', '');
  // verify that there is and only one dash
  const dashRegex = /-/;
  if (rawRut.match(dashRegex).length !== 1) {
    return false;
  }
  // split in body and verifier digit then perform validations
  const splittedRut = rawRut.split('-');
  const body = splittedRut[0];
  const vDigit = splittedRut[1];
  // case for a wrong length
  if (body.length < 7 || body.length > 8) {
    return false;
  }
  let mult = 2;
  for (let i = body.length - 1; i >= 0; i--) {
    if (mult < 8) {
      accumulator += Number(body[i]) * mult;
    }
    if (mult >= 8) {
      mult = 2;
      accumulator += Number(body[i]) * mult;
    }
    mult++;
  }
  const reminderPart = accumulator % 11;
  const verifCommander = 11 - reminderPart;

  if (verifCommander === 11) {
    calcVerDigit = '0';
  }
  if (verifCommander === 10) {
    calcVerDigit = 'k';
  }

  if (verifCommander !== 10 && verifCommander !== 11) {
    calcVerDigit = String(verifCommander);
  }

  // Validate verifier digit in persona.rut
  if (vDigit !== calcVerDigit) {
    return false;
  }

  return true;
};
