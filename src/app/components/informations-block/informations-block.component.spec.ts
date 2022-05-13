import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsBlockComponent } from './informations-block.component';

describe('InformationsBlockComponent', () => {
  let component: InformationsBlockComponent;
  let fixture: ComponentFixture<InformationsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
