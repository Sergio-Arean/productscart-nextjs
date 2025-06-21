
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: "tecnologia" | "hogar" | "moda" | "deporte" | "accesorios";
}

export const categories:string[] = [
    "Todos", "Tecnologia" , "Hogar" , "Moda" , "Deporte" , "Accesorios"
]

export const products: Product[] = [
  {
    id: 1,
    name: "Audífonos Bluetooth",
    price: 59.99,
    description: "Audífonos inalámbricos con cancelación de ruido y batería de larga duración.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "tecnologia"
  },
  {
    id: 2,
    name: "Reloj Inteligente",
    price: 129.99,
    description: "Smartwatch con monitor de ritmo cardíaco, seguimiento de actividad y notificaciones.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "accesorios"
  },
  {
    id: 3,
    name: "Zapatillas Deportivas",
    price: 89.99,
    description: "Zapatillas cómodas para running con amortiguación y soporte para tus entrenamientos.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "deporte"
  },
  {
    id: 4,
    name: "Lámpara de Mesa",
    price: 45.99,
    description: "Lámpara moderna con luz LED ajustable, perfecta para tu escritorio o mesa de noche.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "hogar"
  },
  {
    id: 5, 
    name: "Mochila Impermeable",
    price: 69.99,
    description: "Mochila espaciosa con múltiples compartimentos y resistente al agua para uso diario.",
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "moda"
  },
  {
    id: 6,
    name: "Botella Térmica",
    price: 24.99,
    description: "Botella de acero inoxidable que mantiene tus bebidas frías o calientes por horas.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "accesorios"
  }
];