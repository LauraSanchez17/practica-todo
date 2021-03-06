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
        //input.setAttribute('onclick', "eliminarElemento(this)");
        input.addEventListener('click', eliminarElemento);
        let li = document.createElement('li');
        li.dataset.id = tarea.idTarea;
        let contenidoh4 = document.createTextNode(tarea.titulo);
        let contenidoinput = document.createTextNode('Eliminar tarea');
        h4.appendChild(contenidoh4);
        input.appendChild(contenidoinput);

        li.appendChild(h4);
        li.appendChild(input);
        li.className = tarea.prioridad
        pSeccion.appendChild(li);


    }

}


function filtrarPorPalabra(pListaTareas, pPalabraBuscada) {
    const listaFiltrada = pListaTareas.filter(tarea => {
        let titulo = tarea.titulo;
        return titulo.toLowerCase().includes(pPalabraBuscada.toLowerCase());
    })
    return listaFiltrada;
}




function eliminarElemento(event) {

    let elementoABorrar = (this.parentNode);
    let id = elementoABorrar.dataset.id;
    console.log(elementoABorrar);
    let index = listaTareas.findIndex(tarea => {
        return tarea.idTarea == id

    })
    console.log(index);
    listaTareas.splice(index, 1)
    console.log(elementoABorrar);
    pintarTareas(listaTareas, ul);

}






