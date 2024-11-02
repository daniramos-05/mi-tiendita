const productos = [
    {id:1,
        nombre:"Remera",
        precio: 10.000,
        categoria: "Arriba",
    },
    {id:2,
        nombre:"Bermuda",
        precio: 20.000,
        categoria: "Abajo",
    },
    {id:3,
        nombre:"Ojotas",
        precio: 25.000,
        categoria: "Calzado",
    },
]

export const getProductos = () =>{
  return new Promise ( ( resolve , reject ) => {
    setTimeout( () => {
        resolve(productos);
    }, 3000);
  })
} 