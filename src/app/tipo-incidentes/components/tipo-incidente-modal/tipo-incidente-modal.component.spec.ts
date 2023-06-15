import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoIncidenteModalComponent } from './tipo-incidente-modal.component';

describe('TipoIncidenteModalComponent', () => {
  let component: TipoIncidenteModalComponent;
  let fixture: ComponentFixture<TipoIncidenteModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoIncidenteModalComponent]
    });
    fixture = TestBed.createComponent(TipoIncidenteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
