import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosErrorComponent } from './cursos-error.component';

describe('CursosErrorComponent', () => {
  let component: CursosErrorComponent;
  let fixture: ComponentFixture<CursosErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
