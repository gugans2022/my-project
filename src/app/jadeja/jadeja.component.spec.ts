import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JadejaComponent } from './jadeja.component';

describe('JadejaComponent', () => {
  let component: JadejaComponent;
  let fixture: ComponentFixture<JadejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JadejaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JadejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
