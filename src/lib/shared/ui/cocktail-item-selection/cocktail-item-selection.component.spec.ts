import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailItemSelectionComponent } from './cocktail-item-selection.component';

describe('CocktailItemSelectionComponent', () => {
  let component: CocktailItemSelectionComponent;
  let fixture: ComponentFixture<CocktailItemSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailItemSelectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CocktailItemSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
