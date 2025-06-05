const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

// Colores por marca con paleta mejorada
const brandColors = {
  'Veralume': { 
    primary: '#047857', 
    secondary: '#f0fdf4',
    accent: '#10b981'
  },
  'Linao': { 
    primary: '#065f46', 
    secondary: '#ecfdf5',
    accent: '#059669'
  },
  'Ékoa': { 
    primary: '#059669', 
    secondary: '#d1fae5',
    accent: '#34d399'
  },
  'Auralé': { 
    primary: '#10b981', 
    secondary: '#a7f3d0',
    accent: '#6ee7b7'
  }
};

// Función para generar una imagen de producto
function generateProductImage(filename, text, brand) {
  const canvas = createCanvas(400, 400);
  const ctx = canvas.getContext('2d');
  const colors = brandColors[brand];

  // Fondo con gradiente
  const gradient = ctx.createLinearGradient(0, 0, 400, 400);
  gradient.addColorStop(0, colors.secondary);
  gradient.addColorStop(1, '#ffffff');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 400, 400);

  // Patrón decorativo
  ctx.strokeStyle = colors.accent;
  ctx.lineWidth = 0.5;
  for (let i = 0; i < 400; i += 40) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + 40, 400);
    ctx.stroke();
  }

  // Marco central
  ctx.fillStyle = '#ffffff';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 4;
  ctx.fillRect(40, 60, 320, 280);
  ctx.shadowColor = 'transparent';

  // Borde del marco
  ctx.strokeStyle = colors.primary;
  ctx.lineWidth = 2;
  ctx.strokeRect(40, 60, 320, 280);

  // Logo de la marca
  ctx.fillStyle = colors.primary;
  ctx.font = 'italic bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(brand, 200, 100);

  // Nombre del producto
  ctx.font = 'bold 28px Arial';
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  words.forEach(word => {
    const testLine = currentLine + word + ' ';
    if (ctx.measureText(testLine).width > 280) {
      lines.push(currentLine);
      currentLine = word + ' ';
    } else {
      currentLine = testLine;
    }
  });
  lines.push(currentLine);

  lines.forEach((line, i) => {
    ctx.fillText(line.trim(), 200, 180 + (i * 40));
  });

  // Detalles decorativos
  ctx.strokeStyle = colors.accent;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(100, 280);
  ctx.lineTo(300, 280);
  ctx.stroke();

  // Etiqueta sostenible
  ctx.fillStyle = colors.secondary;
  ctx.fillRect(130, 300, 140, 30);
  ctx.strokeStyle = colors.primary;
  ctx.strokeRect(130, 300, 140, 30);
  ctx.fillStyle = colors.primary;
  ctx.font = '14px Arial';
  ctx.fillText('Moda Sostenible', 200, 320);

  // Guardar imagen con alta calidad
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync(filename, buffer);
}

// Crear directorios si no existen
const dirs = [
  'public/products/images',
  'public/brands/images',
  'public/blog/images'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Lista de productos
const productos = [
  { file: 'organic-tshirt.jpg', text: 'Camiseta Orgánica', brand: 'Veralume' },
  { file: 'wide-jeans.jpg', text: 'Jeans Anchos', brand: 'Linao' },
  { file: 'cotton-tshirt.jpg', text: 'Camiseta Índigo', brand: 'Ékoa' },
  { file: 'linen-pants.jpg', text: 'Pantalón Lino', brand: 'Auralé' },
  { file: 'tencel-dress.jpg', text: 'Vestido Tencel', brand: 'Veralume' },
  { file: 'hemp-shirt.jpg', text: 'Camisa Cáñamo', brand: 'Linao' },
  { file: 'bamboo-shorts.jpg', text: 'Shorts Bambú', brand: 'Ékoa' },
  { file: 'cotton-sweater.jpg', text: 'Sudadera Algodón', brand: 'Auralé' },
  { file: 'ramie-shorts.jpg', text: 'Shorts Ramio', brand: 'Veralume' },
  { file: 'eco-pajamas.jpg', text: 'Pijama Modal', brand: 'Linao' },
  { file: 'seacell-leggings.jpg', text: 'Leggings Seacell', brand: 'Ékoa' },
  { file: 'cupro-skirt.jpg', text: 'Falda Cupro', brand: 'Auralé' },
  { file: 'wool-jacket.jpg', text: 'Chaqueta Lana', brand: 'Veralume' },
  { file: 'bamboo-tank.jpg', text: 'Tank Top Bambú', brand: 'Linao' },
  { file: 'soy-blouse.jpg', text: 'Blusa Soya', brand: 'Ékoa' },
  { file: 'linen-scarf.jpg', text: 'Bufanda Lino', brand: 'Auralé' },
  { file: 'vegan-shoes.jpg', text: 'Zapatos Veganos', brand: 'Veralume' }
];

// Generar imágenes de productos
productos.forEach(producto => {
  generateProductImage(
    path.join('public/products/images', producto.file),
    producto.text,
    producto.brand
  );
});

console.log('Imágenes generadas con éxito!'); 