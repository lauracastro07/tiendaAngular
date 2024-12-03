import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiempleadoListComponent } from './audiempleado-list.component';

describe('AudiempleadoListComponent', () => {
  let component: AudiempleadoListComponent;
  let fixture: ComponentFixture<AudiempleadoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AudiempleadoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiempleadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
