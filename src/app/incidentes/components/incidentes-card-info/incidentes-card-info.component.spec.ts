import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentesCardInfoComponent } from './incidentes-card-info.component';

describe('IncidentesCardInfoComponent', () => {
  let component: IncidentesCardInfoComponent;
  let fixture: ComponentFixture<IncidentesCardInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncidentesCardInfoComponent]
    });
    fixture = TestBed.createComponent(IncidentesCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
