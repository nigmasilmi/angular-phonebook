import { TestBed } from '@angular/core/testing';

import { PersonaDataService } from './persona-data.service';

describe('PersonaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonaDataService = TestBed.get(PersonaDataService);
    expect(service).toBeTruthy();
  });
});
