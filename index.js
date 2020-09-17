contenido = document.getElementById("contenido")

const traer = () =>{
    fetch("datos.json")
    .then(res => res.json())
    .then(datos =>{
        tabla(datos)
    })
}

const tabla = (datos) =>{
    contenido.innerHTML = ""
    for(let valor of datos){
        contenido.innerHTML += `
        <tr>
        <th scope="row">${valor.id}</th>
        <td>${valor.nombre}</td>
        <td>${valor.email}</td>
        <td>${valor.estado ?"conectado" :"desconectado"}</td>
      </tr>`
    }
}