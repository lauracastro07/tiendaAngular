import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiproductoListComponent } from './audiproducto-list.component';

describe('AudiproductoListComponent', () => {
  let component: AudiproductoListComponent;
  let fixture: ComponentFixture<AudiproductoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AudiproductoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiproductoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
