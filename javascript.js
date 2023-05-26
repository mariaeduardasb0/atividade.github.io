 var carro="";

function preencheObjeto(){
    carro = {
        Marca: document.getElementById("txtMarca").value,
        Modelo: document.getElementById("txtModelo").value,
        Ano: parseInt(document.getElementById("txtAno").value),
        Cor: document.getElementById("txtCor").value,
        
        Informacoes: function(){
            return ( 
            "Marca: " + this.Marca + "," +
            " Modelo: " + this.Modelo + "," +
            " Ano: " + this.Ano + "," +
            " Cor: " + this.Cor +";"
            )
        }

    };
    console.log(carro.Informacoes());
}

function mostrarCarro(){
    var lblMostrarCarro = document.getElementById("lblMostrarCarro");
    lblMostrarCarro.innerHTML = carro.Informacoes();
}


    
 