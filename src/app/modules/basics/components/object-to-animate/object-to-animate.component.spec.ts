import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectToAnimateComponent } from './object-to-animate.component';

describe('ObjectToAnimateComponent', () => {
  let component: ObjectToAnimateComponent;
  let fixture: ComponentFixture<ObjectToAnimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectToAnimateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectToAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
