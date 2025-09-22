//Se crea la lista de Nombres amigos
let NombresAmigos=[];

function AgregarAmigoLista(){
    //Se recolecta la informacion suministrada por el usuario en el input
    let input = document.getElementById("amigo");
    //Captura el valor escrito y eliminar espacios al inicio y final
    let NombreAmigo = input.value.trim();

    //Valida que no este vacio
    if (NombreAmigo === ""){
        alert("Por favor ingrese un nombre");
        return;
    }

    let Existe= false
    //Verifica si el nombre ya fue ingresado
    for( let i=0; i<NombresAmigos.length; i++ ){
        if(NombreAmigo === NombresAmigos[i]){
            Existe= true
            break;
        }
    }
    //Si ya fue ingresado pide que se ingrese otro y si no, lo agrega
    if(Existe===true){
        alert("Este nombre ya fue ingresado, por favor ingrese otro");
    }else{
        NombresAmigos.push(NombreAmigo);
    }

    ActualizarListaAmigos();
    input.value = "";
}

function ActualizarListaAmigos(){
    //Obtiene el lugar donde se mostrarán los nombres
    let ListaUsuariosIngresados= document.getElementById("ListaAmigos");
    //Limpia el contenido de la lista
    ListaUsuariosIngresados.innerHTML= "";

    for( let i=0; i<NombresAmigos.length; i++ ){
        //Se Crea el li
        let li = document.createElement("li");
        //Establece el contenido del <li> con el nombre del amigo
        li.textContent= NombresAmigos[i];
        //Agrega el <li> a la lista en el HTML
        ListaUsuariosIngresados.appendChild(li);
    }
}


function SortearAmigo(){
    //Verifica si hay nombres en la lista
    if (NombresAmigos.length<2){
        alert("Debes agregar minimo 2 usuarios para empezar a sortear");
     
    }else{
        //Genera un indice aleatorio y establece el nombre que corresponde a esa posicion
        let IndiceAleatorio= Math.floor(Math.random()*NombresAmigos.length);
        let AmigoSecreto= NombresAmigos[IndiceAleatorio];

        //Limpia la lista de nombres de la pagina
        let ListaUsuariosIngresados= document.getElementById("ListaAmigos");
        ListaUsuariosIngresados.innerHTML= "";

        //Obtener el elemento correspondiente en el html y se modifica
        let Resultado= document.getElementById("resultado");
        Resultado.innerHTML= "Tu amigo secreto es: ¡" + AmigoSecreto + "!";

    }
}


