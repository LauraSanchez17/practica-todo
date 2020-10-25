let ul = document.querySelector('.tarea');
var listaTareas = new Array();

listaTareas = [
    {
        idTarea: 0,
        titulo: 'Estudiar Javascript',
        prioridad: 'urgente'
    },
    {
        idTarea: 2,
        titulo: 'Dormir',
        prioridad: 'diaria'
    },
    {
        idTarea: 3,
        titulo: 'Salir a comer',
        prioridad: 'mensual'
    },
];



function pintarTareas(pListaTareas, pSeccion) {
    ul.innerHTML = '';
    for (tarea of pListaTareas) {
        let h4 = document.createElement('h4');
        let input = document.createElement('button');
        input.setAttribute('onclick', "eliminarElemento(this)");
        let li = document.createElement('li');
        li.dataset.id = tarea.idTarea;
        let contenidoh4 = document.createTextNode(tarea.titulo);
        let contenidoinput = document.createTextNode('Eliminar');
        h4.appendChild(contenidoh4);
        input.appendChild(contenidoinput);

        li.appendChild(h4);
        li.appendChild(input);
        li.className = tarea.prioridad
        pSeccion.appendChild(li);


    }

}

function eliminarElemento(elemento) {

    console.log(elemento.parentNode);
}



/* let filtroPrioridad = document.querySelector('#prioridad');

function filtrarPorPrioridad(pListaTareas, pPrioridad) {

    })

 */

