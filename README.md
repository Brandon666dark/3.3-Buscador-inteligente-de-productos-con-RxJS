# Catálogo de productos — ProductSearchComponent

Angular 22 (standalone, sin zone.js) + RxJS. Búsqueda con `debounceTime`, `distinctUntilChanged` y `map`,
filtros por categoría y rango de precio combinados con `combineLatest`.

## Ejecutar
```bash
npm install
npm start          # http://localhost:4200
npm test           # pruebas (Vitest)
npm run build      # compilación de producción
```

## Estructura
- `src/app/product-search/products.data.ts` — 20 productos (nombre, categoría, precio, descripción, imagen)
- `src/app/product-search/product-search.component.*` — componente, plantilla, estilos y pruebas
- `evidencia-pruebas.txt` — salida de `ng test` (9 pruebas, 8 de búsqueda y filtrado)

Las imágenes vienen de picsum.photos, por lo que se necesita conexión a internet.
