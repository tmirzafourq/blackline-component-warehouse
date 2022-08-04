import { TestBed } from '@angular/core/testing';

import { BlacklineLibraryService } from './blackline-library.service';

describe('BlacklineLibraryService', () => {
  let service: BlacklineLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlacklineLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
