export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

const img = (seed: string) => `https://picsum.photos/seed/${seed}/480/320`;

export const PRODUCTS: Product[] = [
  // Electrónica
  { id: 1, name: 'Laptop Pro 14"', category: 'Electrónica', price: 18999, description: 'Procesador de última generación, 16 GB de RAM y SSD de 512 GB.', image: img('laptop') },
  { id: 2, name: 'Audífonos Inalámbricos', category: 'Electrónica', price: 1299, description: 'Cancelación de ruido y 30 horas de batería.', image: img('headphones') },
  { id: 3, name: 'Smartwatch Fit', category: 'Electrónica', price: 2499, description: 'Monitor de ritmo cardiaco, GPS y resistencia al agua.', image: img('smartwatch') },
  { id: 4, name: 'Teclado Mecánico', category: 'Electrónica', price: 1499, description: 'Switches táctiles, retroiluminación y formato compacto.', image: img('keyboard') },
  { id: 5, name: 'Monitor 27" 4K', category: 'Electrónica', price: 4999, description: 'Panel IPS con 99% sRGB y soporte ajustable.', image: img('monitor') },
  // Hogar
  { id: 6, name: 'Cafetera Automática', category: 'Hogar', price: 1899, description: 'Prepara espresso y americano con un solo botón.', image: img('coffee') },
  { id: 7, name: 'Lámpara de Escritorio LED', category: 'Hogar', price: 649, description: 'Tres temperaturas de luz y brazo flexible.', image: img('lamp') },
  { id: 8, name: 'Aspiradora Robot', category: 'Hogar', price: 5999, description: 'Mapea la casa y regresa sola a su base de carga.', image: img('vacuum') },
  { id: 9, name: 'Set de Sartenes', category: 'Hogar', price: 1199, description: 'Tres piezas antiadherentes aptas para inducción.', image: img('pans') },
  { id: 10, name: 'Silla Ergonómica', category: 'Hogar', price: 3899, description: 'Soporte lumbar ajustable y respaldo de malla.', image: img('chair') },
  // Moda
  { id: 11, name: 'Chamarra de Mezclilla', category: 'Moda', price: 999, description: 'Corte clásico con forro interior suave.', image: img('jacket') },
  { id: 12, name: 'Tenis Urbanos', category: 'Moda', price: 1599, description: 'Suela amortiguada para uso diario.', image: img('sneakers') },
  { id: 13, name: 'Mochila Impermeable', category: 'Moda', price: 799, description: 'Compartimento acolchado para laptop de 15".', image: img('backpack') },
  { id: 14, name: 'Lentes de Sol', category: 'Moda', price: 549, description: 'Protección UV400 y armazón ligero.', image: img('sunglasses') },
  { id: 15, name: 'Reloj Clásico', category: 'Moda', price: 2199, description: 'Caja de acero y correa de piel genuina.', image: img('watch') },
  // Deportes
  { id: 16, name: 'Bicicleta de Montaña', category: 'Deportes', price: 8999, description: '21 velocidades con suspensión delantera.', image: img('bike') },
  { id: 17, name: 'Pelota de Fútbol', category: 'Deportes', price: 399, description: 'Tamaño 5, costuras reforzadas.', image: img('soccer') },
  { id: 18, name: 'Tapete de Yoga', category: 'Deportes', price: 449, description: 'Antiderrapante de 6 mm con correa de transporte.', image: img('yoga') },
  { id: 19, name: 'Mancuernas 20 kg', category: 'Deportes', price: 899, description: 'Par ajustable con recubrimiento de neopreno.', image: img('dumbbell') },
  { id: 20, name: 'Botella Térmica', category: 'Deportes', price: 299, description: 'Mantiene el frío 24 horas, 750 ml.', image: img('bottle') },
];
