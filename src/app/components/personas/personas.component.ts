import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/Persona';
import { PersonaDataService } from '../../services/persona-data.service';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona[];

  constructor(private personaDataService: PersonaDataService) { }

  ngOnInit() {
    this.personaDataService.getPersonas()
      .subscribe(personas => {
        this.personas = personas;
      });
  }

  // temporary to check the rut validator

  testRuts() {
    this.personas.forEach(persona => this.personaDataService.validateRut(persona));
  }
}
