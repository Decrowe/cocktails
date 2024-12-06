import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailItemCardComponent } from './cocktail-item-card.component';

describe('CocktailItemCardComponent', () => {
  let component: CocktailItemCardComponent;
  let fixture: ComponentFixture<CocktailItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailItemCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CocktailItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
