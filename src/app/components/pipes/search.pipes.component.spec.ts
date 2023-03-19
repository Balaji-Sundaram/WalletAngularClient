import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPipesComponent } from './search.pipes.component';

describe('PipesComponent', () => {
  let component: SearchPipesComponent;
  let fixture: ComponentFixture<SearchPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
