import { ComponentFixture, TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ProductSearchComponent } from './product-search.component';

describe('ProductSearchComponent (búsqueda y filtrado)', () => {
  let fixture: ComponentFixture<ProductSearchComponent>;
  let cmp: ProductSearchComponent;
  let el: HTMLElement;

  const cards = () => el.querySelectorAll('.card').length;
  const counter = () => el.querySelector('.counter strong')?.textContent?.trim();
  const wait = (ms: number) => {
    vi.advanceTimersByTime(ms);
    fixture.detectChanges();
  };

  beforeEach(async () => {
    vi.useFakeTimers();
    await TestBed.configureTestingModule({ imports: [ProductSearchComponent] }).compileComponents();
    fixture = TestBed.createComponent(ProductSearchComponent);
    cmp = fixture.componentInstance;
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  afterEach(() => vi.useRealTimers());

  it('P1: muestra los 20 productos y el contador al iniciar', () => {
    expect(cards()).toBe(20);
    expect(counter()).toBe('20');
  });

  it('P2: debounceTime espera 300 ms antes de buscar "laptop"', () => {
    cmp.search.setValue('laptop');
    wait(299);
    expect(cards()).toBe(20);
    wait(1);
    expect(cards()).toBe(1);
    expect(counter()).toBe('1');
  });

  it('P3: la búsqueda ignora mayúsculas y acentos ("LÁMPARA")', () => {
    cmp.search.setValue('LÁMPARA');
    wait(300);
    expect(cards()).toBe(1);
  });

  it('P4: filtra por categoría (Deportes = 5)', () => {
    cmp.selectCategory('Deportes');
    fixture.detectChanges();
    expect(cards()).toBe(5);
  });

  it('P5: filtra por rango de precio ($1,000 – $2,000 = 5)', () => {
    cmp.minPrice.setValue(1000);
    cmp.maxPrice.setValue(2000);
    wait(300);
    expect(cards()).toBe(5);
  });

  it('P6: combina categoría y precio (Electrónica hasta $2,000 = 2)', () => {
    cmp.selectCategory('Electrónica');
    cmp.maxPrice.setValue(2000);
    wait(300);
    expect(cards()).toBe(2);
  });

  it('P7: muestra mensaje cuando no hay coincidencias', () => {
    cmp.search.setValue('xyz123');
    wait(300);
    expect(cards()).toBe(0);
    expect(el.querySelector('.empty')?.textContent).toContain('No encontramos productos');
    expect(counter()).toBe('0');
  });

  it('P8: "Limpiar filtros" restaura el catálogo completo', () => {
    cmp.selectCategory('Moda');
    cmp.search.setValue('reloj');
    wait(300);
    expect(cards()).toBe(1);
    cmp.reset();
    wait(300);
    expect(cards()).toBe(20);
  });
});
