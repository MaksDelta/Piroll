import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGruopBlockComponent } from './form-gruop-block.component';

describe('FormGruopBlockComponent', () => {
  let component: FormGruopBlockComponent;
  let fixture: ComponentFixture<FormGruopBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGruopBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGruopBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
