import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayComponentComponent } from './array-component.component';

describe('ArrayComponentComponent', () => {
  let component: ArrayComponentComponent;
  let fixture: ComponentFixture<ArrayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
