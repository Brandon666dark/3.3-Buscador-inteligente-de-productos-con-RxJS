import { TestBed } from '@angular/core/testing';
import { describe, it, expect } from 'vitest';
import { App } from './app';

describe('App', () => {
  it('renderiza el catálogo', async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-product-search')).toBeTruthy();
  });
});
