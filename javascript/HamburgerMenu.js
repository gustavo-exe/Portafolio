const button = document.getElementById('Despliegue');
const menu = document.getElementById('MenuDesplegable');
var toggle = false;
const DesplegarMenu = () =>{
    menu.classList.toggle('Active');
    if (toggle) {
        document.getElementById("Icono_De_Menu").src = '../imgs/icons/menu_black_24dp.svg';
    }else{
        document.getElementById("Icono_De_Menu").src = '../imgs/icons/icons8-eliminar-100.png';
    }
    toggle = !toggle; 
}
button.addEventListener('click',DesplegarMenu);