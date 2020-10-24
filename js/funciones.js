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

/* function pintarTareas(pListaTareas, pSeccion) {
    pListaTareas.forEach(tarea => {
        pintarUnaTarea(tarea, pSeccion)
    })
}
 */

let ul = document.querySelector('.tarea');

function pintarUnaTarea(pListaTareas, pSeccion) {
    for (tarea of pListaTareas) {
        let h4 = document.createElement('h4');
        let input = document.createElement('button');
        let li = document.createElement('li');
        let contenidoh4 = document.createTextNode(tarea.titulo);
        let contenidoinput = document.createTextNode('Eliminar');
        h4.appendChild(contenidoh4);
        input.appendChild(contenidoinput);

        li.appendChild(h4);
        li.appendChild(input);

        pSeccion.appendChild(li);

        li.className = tarea.prioridad
    }

}
pintarUnaTarea(listaTareas, ul);



function filtrarPorPrioridad(plistaTareas, pPrioridad) {
    const result = plistaTareas.filter(tarea => tarea.prioridad.toLowerCase() == pPrioridad.toLowerCase());
    return result;
}

function filtrarPorPalabra(plistaTareas, pBusquedaPalabra) {

}
