import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoIncidenteModalComponent } from './estado-incidente-modal.component';

describe('EstadoIncidenteModalComponent', () => {
  let component: EstadoIncidenteModalComponent;
  let fixture: ComponentFixture<EstadoIncidenteModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoIncidenteModalComponent]
    });
    fixture = TestBed.createComponent(EstadoIncidenteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
