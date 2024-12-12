export const productos = [
   {
    stock: 10,
    nombre: "Remera",
    img: "https://res.cloudinary.com/dwfbrcxgu/image/upload/v1733954900/2246010101-REMERA-CORNELL-BLANCO_FRENTE_01_webp_sxtgkh.webp",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: 10000,
    categoria: "arriba",
  },
  {
    stock: 10,
    nombre: "Bermuda",
    img: "https://res.cloudinary.com/dwfbrcxgu/image/upload/v1733954899/images_2_bcgs1q.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: 20000,
    categoria: "abajo",
  },
  {
    stock: 10,
    nombre: "Ojotas",
    img: "https://res.cloudinary.com/dwfbrcxgu/image/upload/v1733954900/ojotas-mel-melissa-kokoro-lost-kids-ad-33620-af039-1_fc8ytg.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: 25000,
    categoria: "calzado",
  },
  {
    stock: 10,
    nombre: "Musculosa",
    img: "https://res.cloudinary.com/dwfbrcxgu/image/upload/v1733954900/musculosa-morley-hombre-negra-27c6ab666d3c2c22d016971281827605-1024-1024_qbsy8s.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: 16000,
    categoria: "arriba",
  },
  {
    stock: 10,
    nombre: "Camisa",
    img: "https://res.cloudinary.com/dwfbrcxgu/image/upload/v1733954900/images_hhzzcr.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: 22000,
    categoria: "arriba",
  },
  {
    stock: 10,
    nombre: "Jean",
    img: "https://res.cloudinary.com/dwfbrcxgu/image/upload/v1733954900/FRERES-PROD68507-scaled_c9ukxm.webp",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: 45000,
    categoria: "abajo",
  },
  {
    stock: 10,
    nombre: "Borcegos",
    img: "https://res.cloudinary.com/dwfbrcxgu/image/upload/v1733954900/images_1_zvecmc.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: 70000,
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