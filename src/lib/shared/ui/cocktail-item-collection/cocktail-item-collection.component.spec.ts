import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailItemCollectionComponent } from './cocktail-item-collection.component';

describe('CocktailItemCollectionComponent', () => {
  let component: CocktailItemCollectionComponent;
  let fixture: ComponentFixture<CocktailItemCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailItemCollectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CocktailItemCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
