const button = document.getElementById('Despliegue');
const menu = document.getElementById('MenuDesplegable');

const DesplegarMenu = () =>{
    menu.classList.toggle('Active')
}
button.addEventListener('click',DesplegarMenu);