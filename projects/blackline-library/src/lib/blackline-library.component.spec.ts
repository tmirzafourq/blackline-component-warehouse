import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklineLibraryComponent } from './blackline-library.component';

describe('BlacklineLibraryComponent', () => {
  let component: BlacklineLibraryComponent;
  let fixture: ComponentFixture<BlacklineLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlacklineLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacklineLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
