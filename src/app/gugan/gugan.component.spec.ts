import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuganComponent } from './gugan.component';

describe('GuganComponent', () => {
  let component: GuganComponent;
  let fixture: ComponentFixture<GuganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
