// angular
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// libs
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ConfigService } from '@ngx-config/core';

// framework
import { getWorkingLanguage, Language } from '../../framework/i18n/i18n.module';
import { AuthService } from '@ngx-auth/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['categories.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  preserveWhitespaces: false
})

export class CategoriesComponent implements OnInit {
  title: string;
  currentLanguage$: Observable<Language>;
  availableLanguages: Array<Language>;
  isAuthenticated: boolean;

  categories = [
    {name: 'Appetizers and Snacks', cols: 2, rows: 2, id: 1},
    {name: 'BBQ & Grilling', cols: 1, rows: 1, id: 1},
    {name: 'Bread Recipes', cols: 1, rows: 2, id: 1},
    {name: 'Breakfast and Brunch', cols: 1, rows: 1, id: 1},
    {name: 'Desserts', cols: 1, rows: 1, id: 1},
    {name: 'Dinner Recipes', cols: 1, rows: 1, id: 1},
    {name: 'Drinks', cols: 1, rows: 1, id: 1},
    {name: 'Everyday Cooking', cols: 1, rows: 1, id: 1},
    {name: 'Fruits, Vegetables and Other Produce', cols: 1, rows: 1, id: 1},
    {name: 'Healthy Recipes', cols: 1, rows: 1, id: 1},
    {name: 'Holidays and Events', cols: 1, rows: 1, id: 1},
    {name: 'Ingredients', cols: 1, rows: 1, id: 1},
    {name: 'Lunch Recipes', cols: 1, rows: 1, id: 1},
    {name: 'Main Dishes', cols: 1, rows: 1, id: 1},
    {name: 'Meat and Poultry', cols: 1, rows: 1, id: 1},
    {name: 'Pasta and Noodles', cols: 1, rows: 1, id: 1},
    {name: 'Salad Recipes', cols: 1, rows: 1, id: 1},
    {name: 'Seafood Recipes', cols: 1, rows: 1, id: 1},
    {name: 'Side Dishes', cols: 1, rows: 1, id: 1},
    {name: 'Soups, Stews and Chili', cols: 1, rows: 1, id: 1},
    {name: 'Trusted Brands', cols: 1, rows: 1, id: 1},
    {name: 'U.S. Recipes', cols: 1, rows: 1, id: 1},
    {name: 'World Cuisine', cols: 1, rows: 1, id: 1}
  ];

  selectedCategory(e: object, category: object): void {
    alert("Clicked :: "+category.name);
  }

  constructor(private readonly store: Store<Language>,
              private readonly config: ConfigService,
              private readonly auth: AuthService) {
  }

  ngOnInit(): void {
    this.title = 'APP_NAME';
    this.currentLanguage$ = this.store.select(getWorkingLanguage);
    this.availableLanguages = this.config.getSettings('i18n.availableLanguages');
    this.isAuthenticated = this.auth.isAuthenticated;
  }

  logout(): void {
    this.auth.invalidate();
  }
}
