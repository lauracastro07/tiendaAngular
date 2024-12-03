import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiclienteListComponent } from './audicliente-list.component';

describe('AudiclienteListComponent', () => {
  let component: AudiclienteListComponent;
  let fixture: ComponentFixture<AudiclienteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AudiclienteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiclienteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
