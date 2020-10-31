import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../models/Persona';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input() persona: Persona;

  constructor() { }

  ngOnInit() {
  }

  // Setting active classes for visual feedback on non-active personas
  setActiveClasses() {
    const classes = {
      personaContainer: true,
      notActive: this.persona.activo !== 1
    };

    return classes;
  }

  // Shows the clicked persona detail
  showPersonaDetail() {
    console.log('you clicked on persona');
  }

}
