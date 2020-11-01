import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/Persona';
import { PersonaDataService } from '../../services/persona-data.service';
import { validateRut } from '../../helpers/rutValidator';
import { validatePhone } from '../../helpers/phoneValidator';
import { fixString } from '../../helpers/fixBadFormatting';



@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona[];
  showUI = false;
  showAppDetail = false;
  searchText = '';
  personOfInterest: Persona;

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
      // console.log('persona.direccion.comuna.nombre', persona.direccion.comuna.nombre);
      // console.log('fixString(persona.direccion.comuna.nombre)', fixString(persona.direccion.comuna.nombre));
    });
  }
  showThisContactDetail(personaComing) {
    this.showAppDetail = true;
    this.personOfInterest = personaComing;
    console.log(personaComing);
    console.log(this.showAppDetail);

  }

  hideModal(hideIt: boolean) {
    console.log(hideIt);
    this.showAppDetail = false;
    console.log(this.showAppDetail);
  }

}
