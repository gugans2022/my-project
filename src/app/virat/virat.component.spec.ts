import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViratComponent } from './virat.component';

describe('ViratComponent', () => {
  let component: ViratComponent;
  let fixture: ComponentFixture<ViratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
