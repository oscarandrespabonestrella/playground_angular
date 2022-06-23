import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByPipeComponent } from './filter-by-pipe.component';

describe('FilterByPipeComponent', () => {
  let component: FilterByPipeComponent;
  let fixture: ComponentFixture<FilterByPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterByPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
