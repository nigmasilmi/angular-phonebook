import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.css']
})
export class PersonaDetailComponent implements OnInit {
  @Input() thePerson: Persona;
  @Output() closeModal = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() { }

  hideDetail(hideIt: boolean) {
    console.log('hiding the modal');
    this.closeModal.emit(hideIt);
    console.log(hideIt);
  }

}
