import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarComentariosComponent } from './agregar-comentarios.component';

describe('AgregarComentariosComponent', () => {
  let component: AgregarComentariosComponent;
  let fixture: ComponentFixture<AgregarComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarComentariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
