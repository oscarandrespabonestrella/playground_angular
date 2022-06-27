import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDateHelperComponent } from './example-date-helper.component';

describe('ExampleDateHelperComponent', () => {
  let component: ExampleDateHelperComponent;
  let fixture: ComponentFixture<ExampleDateHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleDateHelperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleDateHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
