import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComExampleComponent } from './com-example.component';

describe('ComExampleComponent', () => {
  let component: ComExampleComponent;
  let fixture: ComponentFixture<ComExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
