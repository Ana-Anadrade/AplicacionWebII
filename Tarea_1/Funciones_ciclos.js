//Ciclo for
function mostarfor(Consumo,Tipo_de_Gasolina,Dispensador){
    console.log(
        "----------------------------------------------------"
    )
    console.log(
        "Datos mostrado por  ciclo for:"
    )
    for (const datos of Consumo){
    datosdispen = Dispensador.find(Ndeispensador => Ndeispensador.id===datos.ID_Dispensador )
    datostipo =Tipo_de_Gasolina.find (Ntipo => Ntipo.id===datos.ID_Tipo_de_Gasolina)

        console.log(
            "----------------------------------------------------"
        )
        console.log(
            "Facturacion"
        )
        console.log(
            "----------------------------------------------------"
        )
        console.log(
            "-ID del consumo:"+datos.ID,   
        );
        console.log(
            "-ID de Tipo de Gasolina:"+datos.ID_Tipo_de_Gasolina, 
        );
        console.log(
            `-Tipo de gasolina: ${datostipo.descripcion} `
        );
        console.log(
            "-ID de Dispensador:"+datos.ID_Dispensador, 
        );
        console.log(
            `-Tipo de dispensador: ${datosdispen.descripcion} `
        ); 
        console.log(
            `-Costo del galon: ${datostipo.costodegalon} `
        ); 
        console.log(
            "-Número de galones:"+datos.Número_de_galones,
        );
        console.log(
            "-Total a pagar:"+datos.Total_en_dólares
        ); 
        console.log(
            "----------------------------------------------------"
        )
        console.log(
            ""
        )
    }
}



//Ciclo while
function mostrarwhile(Consumo,Tipo_de_Gasolina,Dispensador){
    var Datos=0;
    console.log(
        "----------------------------------------------------"
    )
    console.log(
        "Datos mostrado por ciclo while:"
    )
    while(Datos< Consumo.length){
        var mostrarconsumo = Consumo[Datos]
        datodispensa = Dispensador.find(Nudeispensador => Nudeispensador.id===mostrarconsumo.ID_Dispensador );
        datostipoga =Tipo_de_Gasolina.find (Nutipo => Nutipo.id===mostrarconsumo.ID_Tipo_de_Gasolina);
        console.log(
            "----------------------------------------------------"
        )
        console.log(
            "Facturacion"
        )
        console.log(
            "----------------------------------------------------"
        )
        console.log(
            "-ID del consumo:"+mostrarconsumo.ID,   
        );
        console.log(
            "-ID de Tipo de Gasolina:"+mostrarconsumo.ID_Tipo_de_Gasolina, 
        );
        console.log(
            `-Tipo de gasolina: ${datostipoga.descripcion} `
        );
        console.log(
            "-ID de Dispensador:"+mostrarconsumo.ID_Dispensador, 
        );
        console.log(
            `-Tipo de dispensador: ${datodispensa.descripcion} `
        ); 
        console.log(
            `-Costo del galon: ${datostipoga.costodegalon} `
        ); 
        console.log(
            "-Número de galones:"+mostrarconsumo.Número_de_galones,
        );
        console.log(
            "-Total a pagar:"+mostrarconsumo.Total_en_dólares
        ); 
        console.log(
            "----------------------------------------------------"
        )
        console.log(
            ""
        )

        /*console.log(mostrarconsumo)
        console.log(datodispensa.descripcion)
        console.log(datostipoga)*/
        Datos++;
    }

}


//Ciclo ForEach
function mostarforEach(Consumo,Tipo_de_Gasolina,Dispensador){
    console.log(
        "----------------------------------------------------"
    )
    console.log(
        "Datos mostrado por ciclo forEach:"
    )
    Consumo.forEach(datosconsumo=>{
        datodispensa = Dispensador.find(Nudeispensador => Nudeispensador.id===datosconsumo.ID_Dispensador );
        datostipoga =Tipo_de_Gasolina.find (Nutipo => Nutipo.id===datosconsumo.ID_Tipo_de_Gasolina);
        console.log(
            "----------------------------------------------------"
        )
        console.log(
            "Facturacion"
        )
        console.log(
            "----------------------------------------------------"
        )
        console.log(
            "-ID del consumo:"+datosconsumo.ID,   
        );
        console.log(
            "-ID de Tipo de Gasolina:"+datosconsumo.ID_Tipo_de_Gasolina, 
        );
        console.log(
            `-Tipo de gasolina: ${datostipoga.descripcion} `
        );
        console.log(
            "-ID de Dispensador:"+datosconsumo.ID_Dispensador, 
        );
        console.log(
            `-Tipo de dispensador: ${datodispensa.descripcion} `
        ); 
        console.log(
            `-Costo del galon: ${datostipoga.costodegalon} `
        ); 
        console.log(
            "-Número de galones:"+datosconsumo.Número_de_galones,
        );
        console.log(
            "-Total a pagar:"+datosconsumo.Total_en_dólares
        ); 
        console.log(
            "----------------------------------------------------"
        )
        console.log(
            ""
        )

    })
}
module.exports= {
    mostrarwhile,
    mostarfor,
    mostarforEach
 }

/*const { Tipo_de_Gasolina,Dispensador,consumo }  = require('./Taller1.js');
const functions= require('./Taller1.js')
for (const datos of Dispensador){
    console.log("ID del dispensador:"+datos.id,   "Descripcion del dispensador:"+datos.descripcion);
    console.log("ID del")
}*/
