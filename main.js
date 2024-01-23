const clickboton = document.querySelectorAll (".button")
const tbody = 
document.querySelector (".tbody")
 
let carrito = []


clickboton.forEach(btn => {
     btn.addEventListener ("click", agregarAlCarrito) 
  })

  function agregarAlCarrito (e) {
    const button = e.target
    const item = button.closest (".card")
    const itemtitulo = item.querySelector (".titulo") .textContent;
    const itemprecio = item.querySelector (".precio") .textContent
    const itemimg = item.querySelector (".img") .src
    
    const newProducto = {
        titulo: itemtitulo,
        precio: itemprecio,
        img:itemimg,
        cantidad : 1
    }
       agregarProducto(newProducto)
  }
  
  function agregarProducto (newProducto){

    carrito .push(newProducto)

    procesarCarrito ()
  }


  function procesarCarrito(){
    if (!tbody){
        console.error("elemento tbody no encontrado en el DOM");
        return;
    }
    tbody.innerHTML  = ""
        carrito.map(item =>{
           const tr = document.createElement ("tr")
           tr.classList.add ("itemCarrito")
           const content = `
           <th scope="row">1</th>
           <td class="table__combo">
             <img src=${item.img} alt="">
             <h6 class ="title">${item.titulo }</h6>
           </td>
           <td class="table__precio">
             <p>${item.precio}</p>
           </td>
           <td class="table__cantidad">
             <button class=" delete button bg-danger rounded">Eliminar</button>
             <input type="number" min="1" value=${item.cantidad}>
           </td>
        `
    
        tr.innerHTML = content;
        tbody.append(tr)
        })
    
      }
    
   