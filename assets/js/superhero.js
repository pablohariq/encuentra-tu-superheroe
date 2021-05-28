//recoger input de usuario
const boton = $("button");
const input = $("input");

function encontrarSuperHero(){
    $.ajax({
        url: `https://superheroapi.com/api.php/10225928059845850/${input.val()}`,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            //verificar si el id no es válido para la API
            if (data.response == "error"){
                alert('ID de SuperHeroe no encontrado')
                return false
            }
            else{
                //destructuring data
                let {url: urlImagen} = data.image
                let {name: nombre} = data //destructuring del primer nivel
                // let {full-name: nombreReal } = data.biography
                let {publisher: publicado} = data.biography

                $("#info-nombre").html(nombre);
                $("info-nombreReal").html(nombreReal)
                $("#info-publicado").html(`<i>Publicado por</i>: ${publicado}`)
                $("#info-img").attr('src',`${urlImagen}`)
                alert('todo bien pa')
            }

            console.log(data.response);
            console.log(input.val())
        },
        error: function(error){
            alert("Error de comunicación");
            console.log(error)
        }
    })
}

//validación usando números, acepta solo enteros positivos y entrega true o false
function validar(input){
    let num = Number(input);
    return(Number.isInteger(num) && (num > 0))
}

//validación usando regex
//(pendiente)


boton.click(()=>{
    validar(input.val())
    ? encontrarSuperHero()
    : (alert("ID ingresado no válido"),input.val("")) //alerta y borra el input inválido
})
