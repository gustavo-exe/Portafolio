const Item = document.getElementById('Item');
const Descripcion = document.getElementById('Item');

const DesplegarDescripcion = () =>{
    Descripcion.classList.toggle('Active')
    console.log('click')
}
Item.addEventListener('click',DesplegarDescripcion);