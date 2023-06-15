import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDocumentoModalComponent } from './tipo-documento-modal.component';

describe('TipoDocumentoModalComponent', () => {
  let component: TipoDocumentoModalComponent;
  let fixture: ComponentFixture<TipoDocumentoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoDocumentoModalComponent]
    });
    fixture = TestBed.createComponent(TipoDocumentoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
