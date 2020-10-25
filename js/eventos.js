
let btnGuardar = document.querySelector('#btnGuardar')
let inputIntroducir = document.querySelector('#introducir');
let selectPrioridad = document.querySelector('#introducePrioridad');


btnGuardar.addEventListener('click', guardarTarea);

let contador = 4;
function guardarTarea() {
    let valorInput = inputIntroducir.value;
    let valorPrioridad = selectPrioridad.value;
    let nuevaTarea = {};
    nuevaTarea.idTarea = contador;
    nuevaTarea.titulo = valorInput;
    nuevaTarea.prioridad = valorPrioridad;


    listaTareas.push(nuevaTarea);
    contador++;

    pintarTareas(listaTareas, ul);
}


let buscador = document.querySelector('#buscador');

buscador.addEventListener('input', recogerBusqueda);

function recogerBusqueda(event) {
    let palabraBuscar = event.target.value.trim();

    let listaFiltrada = filtrarPorPalabra(listaTareas, palabraBuscar);
    pintarTareas(listaFiltrada, ul);
}




let selectorPrioridad = document.querySelector('#prioridad');

selectorPrioridad.addEventListener('change', event => {
    let prioridad = event.target.value;
    let listaFiltradaPorPrioridad = listaTareas.filter(tarea => {
        return tarea.prioridad == prioridad;

    })
    pintarTareas(listaFiltradaPorPrioridad, ul)
})



/* const tareas = new Array();

for (tarea of listaTareas) {
    tareas.push(tarea.prioridad);
}

let set = new Set(tareas);

const prioridades = Array.from(set);

prioridades.forEach(diagnostico => {
    selectPrioridad.innerHTML += `<option value=${prioridad}>${diagnostico}</option>`
})


 */