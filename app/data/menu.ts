export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  popular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: "hamburguesas-clasicas",
    name: "Hamburguesas Clásicas",
    products: [
      {
        id: "h1",
        name: "Hamburguesa Corriente",
        description: "Carne de res, lechuga, tomate, cebolla, queso y salsas",
        price: 12000,
        category: "hamburguesas-clasicas",
        image: "/images/menu/hamburguesa-corriente.jpg",
        popular: true,
      },
      {
        id: "h2",
        name: "Hamburguesa Super Especial",
        description: "Doble carne, doble queso, lechuga, tomate, cebolla y salsas",
        price: 18000,
        category: "hamburguesas-clasicas",
        image: "/images/menu/hamburguesa-super-especial.jpg",
      },
      {
        id: "h3",
        name: "Hamburguesa Especial",
        description: "Carne de res, tocineta crujiente, queso, lechuga y tomate",
        price: 16000,
        category: "hamburguesas-clasicas",
        image: "/images/menu/hamburguesa-especial.jpg",
        popular: true,
      },
    ],
  },
  {
    id: "hamburguesas-especiales",
    name: "Hamburguesas Especiales",
    products: [
      {
        id: "he1",
        name: "Hamburguesa Manolete",
        description: "Carne de res, pollo, tocineta, huevo, queso, piña y salsas especiales",
        price: 25000,
        category: "hamburguesas-especiales",
        image: "/images/menu/hamburguesa-manolete.jpg",
        popular: true,
      },
      {
        id: "he2",
        name: "Hamburguesa BBQ",
        description: "Carne de res, salsa BBQ, cebolla caramelizada, tocineta y queso cheddar",
        price: 22000,
        category: "hamburguesas-especiales",
        image: "/images/menu/hamburguesa-bbq.jpg",
      },
      {
        id: "he3",
        name: "Hamburguesa Mexicana",
        description: "Carne de res, guacamole, jalapeños, nachos, queso y salsa mexicana",
        price: 23000,
        category: "hamburguesas-especiales",
        image: "/images/menu/hamburguesa-mexicana.jpg",
      },
      {
        id: "he4",
        name: "Hamburguesa Hawaiana",
        description: "Carne de res, piña caramelizada, jamón, queso mozzarella y salsa rosada",
        price: 21000,
        category: "hamburguesas-especiales",
        image: "/images/menu/hamburguesa-hawaiana.jpg",
      },
    ],
  },
  {
    id: "perros-calientes",
    name: "Perros Calientes",
    products: [
      {
        id: "pc1",
        name: "Perro Sencillo",
        description: "Salchicha americana, cebolla, salsa de tomate, mayonesa y mostaza",
        price: 8000,
        category: "perros-calientes",
        image: "/images/menu/perro-sencillo.jpg",
      },
      {
        id: "pc2",
        name: "Perro Especial",
        description: "Salchicha americana, tocineta, queso, cebolla caramelizada y salsas",
        price: 13000,
        category: "perros-calientes",
        image: "/images/menu/perro-especial.jpg",
        popular: true,
      },
      {
        id: "pc3",
        name: "Perro Mexicano",
        description: "Salchicha americana, guacamole, jalapeños, nachos y salsa mexicana",
        price: 15000,
        category: "perros-calientes",
        image: "/images/menu/perro-mexicano.jpg",
      },
    ],
  },
  {
    id: "papas-salchipapas",
    name: "Papas y Salchipapas",
    products: [
      {
        id: "ps1",
        name: "Papas a la Francesa",
        description: "Porción de papas fritas crocantes con salsa de tomate y mayonesa",
        price: 8000,
        category: "papas-salchipapas",
        image: "/images/menu/papas-francesa.jpg",
      },
      {
        id: "ps2",
        name: "Salchipapas Sencillas",
        description: "Papas fritas con salchicha americana y salsas",
        price: 12000,
        category: "papas-salchipapas",
        image: "/images/menu/salchipapas-sencillas.jpg",
        popular: true,
      },
      {
        id: "ps3",
        name: "Salchipapas Especial",
        description: "Papas fritas, salchicha, queso gratinado, tocineta y salsas",
        price: 18000,
        category: "papas-salchipapas",
        image: "/images/menu/salchipapas-especial.jpg",
      },
      {
        id: "ps4",
        name: "Salchipapas Manolete",
        description: "Papas fritas, salchicha, pollo desmechado, queso, huevo y salsas especiales",
        price: 25000,
        category: "papas-salchipapas",
        image: "/images/menu/salchipapas-manolete.jpg",
        popular: true,
      },
    ],
  },
  {
    id: "desgranados",
    name: "Desgranados",
    products: [
      {
        id: "d1",
        name: "Desgranado de Pollo",
        description: "Maíz desgranado, pollo desmechado, queso gratinado, papas fritas y salsas",
        price: 20000,
        category: "desgranados",
        image: "/images/menu/desgranado-pollo.jpg",
        popular: true,
      },
      {
        id: "d2",
        name: "Desgranado de Carne",
        description: "Maíz desgranado, carne desmechada, queso gratinado, papas fritas y salsas",
        price: 22000,
        category: "desgranados",
        image: "/images/menu/desgranado-carne.jpg",
      },
      {
        id: "d3",
        name: "Desgranado Mixto",
        description: "Maíz desgranado, pollo, carne, queso, huevo, papas fritas y salsas",
        price: 26000,
        category: "desgranados",
        image: "/images/menu/desgranado-mixto.jpg",
        popular: true,
      },
    ],
  },
  {
    id: "carnes",
    name: "Carnes",
    products: [
      {
        id: "c1",
        name: "Punta de Anca",
        description: "Jugosa punta de anca a la parrilla con papas y ensalada",
        price: 28000,
        category: "carnes",
        image: "/images/menu/punta-anca.jpg",
      },
      {
        id: "c2",
        name: "Churrasco",
        description: "Churrasco de res a la parrilla con papas y ensalada",
        price: 26000,
        category: "carnes",
        image: "/images/menu/churrasco.jpg",
        popular: true,
      },
      {
        id: "c3",
        name: "Baby Beef",
        description: "Baby beef tierno con papas a la francesa y ensalada",
        price: 30000,
        category: "carnes",
        image: "/images/menu/baby-beef.jpg",
      },
    ],
  },
  {
    id: "picadas",
    name: "Picadas",
    products: [
      {
        id: "p1",
        name: "Picada Pequeña",
        description: "Papas fritas, salchicha, butifarra, chorizo, carne, pollo y queso (2 personas)",
        price: 35000,
        category: "picadas",
        image: "/images/menu/picada-pequena.jpg",
      },
      {
        id: "p2",
        name: "Picada Mediana",
        description: "Papas fritas, salchicha, butifarra, chorizo, carne, pollo, tocineta y queso (4 personas)",
        price: 55000,
        category: "picadas",
        image: "/images/menu/picada-mediana.jpg",
        popular: true,
      },
      {
        id: "p3",
        name: "Picada Familiar",
        description: "Gran porción de papas fritas, salchicha, butifarra, chorizo, carne, pollo, tocineta, huevo y queso (6 personas)",
        price: 80000,
        category: "picadas",
        image: "/images/menu/picada-familiar.jpg",
        popular: true,
      },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    products: [
      {
        id: "b1",
        name: "Gaseosa Personal",
        description: "Coca-Cola, Sprite o Postobón 400ml",
        price: 4000,
        category: "bebidas",
        image: "/images/menu/gaseosa-personal.jpg",
      },
      {
        id: "b2",
        name: "Gaseosa 1.5L",
        description: "Coca-Cola, Sprite o Postobón 1.5 litros",
        price: 8000,
        category: "bebidas",
        image: "/images/menu/gaseosa-15l.jpg",
      },
      {
        id: "b3",
        name: "Jugo Natural",
        description: "Jugo de mango, maracuyá, mora o lulo en agua o leche",
        price: 6000,
        category: "bebidas",
        image: "/images/menu/jugo-natural.jpg",
        popular: true,
      },
      {
        id: "b4",
        name: "Limonada",
        description: "Limonada natural, cerezada o coco",
        price: 5000,
        category: "bebidas",
        image: "/images/menu/limonada.jpg",
      },
      {
        id: "b5",
        name: "Cerveza",
        description: "Cerveza nacional en lata o botella",
        price: 5000,
        category: "bebidas",
        image: "/images/menu/cerveza.jpg",
      },
    ],
  },
  {
    id: "adicionales",
    name: "Adicionales",
    products: [
      {
        id: "a1",
        name: "Queso Extra",
        description: "Porción adicional de queso",
        price: 3000,
        category: "adicionales",
        image: "/images/menu/queso-extra.jpg",
      },
      {
        id: "a2",
        name: "Tocineta Extra",
        description: "Porción adicional de tocineta crujiente",
        price: 4000,
        category: "adicionales",
        image: "/images/menu/tocineta-extra.jpg",
      },
      {
        id: "a3",
        name: "Huevo Extra",
        description: "Huevo frito adicional",
        price: 2000,
        category: "adicionales",
        image: "/images/menu/huevo-extra.jpg",
      },
      {
        id: "a4",
        name: "Carne Extra",
        description: "Carne de res adicional",
        price: 7000,
        category: "adicionales",
        image: "/images/menu/carne-extra.jpg",
      },
      {
        id: "a5",
        name: "Papas Extra",
        description: "Porción adicional de papas a la francesa",
        price: 5000,
        category: "adicionales",
        image: "/images/menu/papas-extra.jpg",
      },
    ],
  },
];

export const popularProducts: Product[] = categories
  .flatMap((c) => c.products)
  .filter((p) => p.popular)
  .slice(0, 5);

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price);
}

export function getWhatsAppLink(productName: string): string {
  const text = encodeURIComponent(`Hola, quiero pedir ${productName}`);
  return `https://wa.me/573164669253?text=${text}`;
}

export function getGeneralWhatsAppLink(): string {
  const text = encodeURIComponent(
    "Hola, quiero hacer un pedido en Comidas Rápidas Manolete"
  );
  return `https://wa.me/573164669253?text=${text}`;
}
