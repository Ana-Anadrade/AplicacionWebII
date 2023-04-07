const Tipo_de_Gasolina=[
    {
id:1,descripcion:"eco", costodegalon:1.50
    },
    {
id:2,descripcion:"eco", costodegalon:1.50
    },
    {
id:3,descripcion:"super", costodegalon:2.00
    },
    {
id:4,descripcion:"super", costodegalon:2.00
    },
    {
id:5,descripcion:"eco", costodegalon:1.50
    },
]


const Dispensador=[
    {
id:1,descripcion:"Dispensador de eco"
    },
    {
id:2,descripcion:"Dispensador de eco"
    },
    {
id:3,descripcion:"Dispensador de super"
    },
    {
id:4,descripcion:"Dispensador de super"
    },
    {
id:5,descripcion:"Dispensador de eco"
    },
]

const Consumo=[
    {
ID:1, ID_Tipo_de_Gasolina:5, ID_Dispensador:2, Número_de_galones:2, Total_en_dólares:3.00
    },
    {
ID:2, ID_Tipo_de_Gasolina:1, ID_Dispensador:5, Número_de_galones:1, Total_en_dólares:1.50
    },
    {
ID:3, ID_Tipo_de_Gasolina:3, ID_Dispensador:3, Número_de_galones:8, Total_en_dólares:16.00
    },
    {
ID:4, ID_Tipo_de_Gasolina:2, ID_Dispensador:1, Número_de_galones:3, Total_en_dólares:4.50
    },
    {
ID:5, ID_Tipo_de_Gasolina:2, ID_Dispensador:4, Número_de_galones:5, Total_en_dólares:7.50
    },
    
];

module.exports= {
   Tipo_de_Gasolina,
    Dispensador,
    Consumo

}