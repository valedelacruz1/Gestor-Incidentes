import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependenciaModalComponent } from './dependencia-modal.component';

describe('DependenciaModalComponent', () => {
  let component: DependenciaModalComponent;
  let fixture: ComponentFixture<DependenciaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DependenciaModalComponent]
    });
    fixture = TestBed.createComponent(DependenciaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
