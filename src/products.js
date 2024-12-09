export const productos = [
  {
    id: 1,
    stock: 10,
    nombre: "Remera",
    img: "https://enfans.com.ar/wp-content/uploads/2021/12/2246010101-REMERA-CORNELL-BLANCO_FRENTE_01_webp.webp",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: "$10.000",
    categoria: "arriba",
  },
  {
    id: 2,
    stock: 10,
    nombre: "Bermuda",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAGhliE9JEhne6TSQI2zidr6P50CQjoejrtw&s",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: "$20.000",
    categoria: "abajo",
  },
  {
    id: 3,
    stock: 10,
    nombre: "Ojotas",
    img: "https://melissa.footolophy.com.ar/media/catalog/product/cache/7/thumbnail/9df78eab33525d08d6e5fb8d27136e95/o/j/ojotas-mel-melissa-kokoro-lost-kids-ad-33620-af039-1.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: "$25.000",
    categoria: "calzado",
  },
  {
    id: 4,
    stock: 10,
    nombre: "Musculosa",
    img: "https://acdn.mitiendanube.com/stores/943/997/products/musculosa-morley-hombre-negra-27c6ab666d3c2c22d016971281827605-1024-1024.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: "$16.000",
    categoria: "arriba",
  },
  {
    id: 5,
    stock: 10,
    nombre: "Camisa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjl6uLQsULsRfaImOoU6b3g45OlhMfYbXLg&s",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: "$22.000",
    categoria: "arriba",
  },
  {
    id: 6,
    stock: 10,
    nombre: "Jean",
    img: "https://freres.ar/wp-content/uploads/2023/12/FRERES-PROD68507-scaled.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: "$45.000",
    categoria: "abajo",
  },
  {
    id: 7,
    stock: 10,
    nombre: "Borcegos",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXvkNHlhRy5L6JR9Kvcjua4c0x_iGm58zwQ&s",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: "$70.000",
    categoria: "calzado",
  },
];

export const getProductos = () =>{
  return new Promise ( ( resolve , reject ) => {
    setTimeout( () => {
        resolve(productos);
    }, 300);
  })
} 