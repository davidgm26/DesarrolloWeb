import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeComentariosComponent } from './lista-de-comentarios.component';

describe('ListaDeComentariosComponent', () => {
  let component: ListaDeComentariosComponent;
  let fixture: ComponentFixture<ListaDeComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDeComentariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
