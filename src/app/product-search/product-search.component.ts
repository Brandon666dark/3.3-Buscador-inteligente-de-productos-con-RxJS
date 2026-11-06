import { Component } from '@angular/core';
import { CurrencyPipe, AsyncPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  combineLatest, debounceTime, distinctUntilChanged, map, startWith,
} from 'rxjs';
import { PRODUCTS, Product } from './products.data';

const ALL = 'Todas';
const normalize = (s: string) =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, CurrencyPipe],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css',
})
export class ProductSearchComponent {
  readonly ALL = ALL;
  readonly categories = [ALL, ...new Set(PRODUCTS.map((p) => p.category))];

  readonly search = new FormControl('', { nonNullable: true });
  readonly category = new FormControl(ALL, { nonNullable: true });
  readonly minPrice = new FormControl<number | null>(null);
  readonly maxPrice = new FormControl<number | null>(null);

  // Texto: map -> debounceTime -> distinctUntilChanged
  private readonly term$ = this.search.valueChanges.pipe(
    map(normalize),
    debounceTime(300),
    startWith(''),
    distinctUntilChanged(),
  );

  private readonly category$ = this.category.valueChanges.pipe(
    startWith(ALL),
    distinctUntilChanged(),
  );

  private price$(ctrl: FormControl<number | null>) {
    return ctrl.valueChanges.pipe(
      map((v) => (v === null || (v as unknown) === '' ? null : Number(v))),
      debounceTime(300),
      startWith(null as number | null),
      distinctUntilChanged(),
    );
  }

  // Los tres filtros se combinan en un único flujo
  readonly vm$ = combineLatest([
    this.term$,
    this.category$,
    this.price$(this.minPrice),
    this.price$(this.maxPrice),
  ]).pipe(
    map(([term, cat, min, max]) =>
      PRODUCTS.filter(
        (p: Product) =>
          normalize(p.name).includes(term) &&
          (cat === ALL || p.category === cat) &&
          (min === null || p.price >= min) &&
          (max === null || p.price <= max),
      ),
    ),
    map((results) => ({ results, count: results.length, total: PRODUCTS.length })),
  );

  selectCategory(c: string) {
    this.category.setValue(c);
  }

  reset() {
    this.search.setValue('');
    this.category.setValue(ALL);
    this.minPrice.setValue(null);
    this.maxPrice.setValue(null);
  }

  trackById(_: number, p: Product) {
    return p.id;
  }
}
