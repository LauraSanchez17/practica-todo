
let btnGuardar = document.querySelector('#btnGuardar')
let inputIntroducir = document.querySelector('#introducir');
let selectPrioridad = document.querySelector('#introducePrioridad');

btnGuardar.addEventListener('click', guardarTarea);

let contador = 4;
function guardarTarea() {
    let valorInput = inputIntroducir.value;
    let valorPrioridad = selectPrioridad.value;
    let nuevaTarea = {};
    nuevaTarea.IdTarea = contador;
    nuevaTarea.titulo = valorInput;
    nuevaTarea.prioridad = valorPrioridad;


    listaTareas.push(nuevaTarea);
    contador++;

    console.log(nuevaTarea);
}

pintarUnaTarea(listaTareas, ul);



//listaTareas.push();
//guardarTarea(3, 'saltar', 'urgente')



/* let seccionTarea = document.querySelector('#tarea');

//pintarTareas(seccionTarea);
//pintarUnaTarea(pTarea, pSection);



let selectPrioridad = document.querySelector('#prioridad');

const tareas = new Array();

for (tarea of listaTareas) {
    tareas.push(tarea.prioridad);
}

let set = new Set(tareas);

const prioridades = Array.from(set);

prioridades.forEach(diagnostico => {
    selectPrioridad.innerHTML += `<option value=${prioridad}>${diagnostico}</option>`
})

selectPrioridad.addEventListener('change', event => {
    pintarTareas(filtrarPorPrioridad(listaTareas, event.target.value), seccionTarea)
})
 */