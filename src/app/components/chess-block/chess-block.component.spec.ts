import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessBlockComponent } from './chess-block.component';

describe('ChessBlockComponent', () => {
  let component: ChessBlockComponent;
  let fixture: ComponentFixture<ChessBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
