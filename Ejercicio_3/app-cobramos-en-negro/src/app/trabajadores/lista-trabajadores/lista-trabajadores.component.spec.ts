import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTrabajadoresComponent } from './lista-trabajadores.component';

describe('ListaTrabajadoresComponent', () => {
  let component: ListaTrabajadoresComponent;
  let fixture: ComponentFixture<ListaTrabajadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTrabajadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
