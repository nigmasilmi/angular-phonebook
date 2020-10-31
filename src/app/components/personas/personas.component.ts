import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/Persona';
import { PersonaDataService } from '../../services/persona-data.service';
import { validateRut } from '../../helpers/rutValidator';
import { validatePhone } from '../../helpers/phoneValidator';



@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona[];
  showUI = false;
  searchText = '';

  constructor(private personaDataService: PersonaDataService) { }

  ngOnInit() {
    this.personaDataService.getPersonas()
      .subscribe(personas => {
        this.personas = personas;
        this.showUI = true;
        this.startValidation();

      });
  }

  startValidation() {
    this.personas.forEach(persona => {
      if (validateRut(persona)) {
        persona.validRut = true;
      }
      if (validatePhone(persona)) {
        persona.validPhone = true;
      }
    });
  }


}
