const button = document.getElementById('Despliegue');
const menu = document.getElementById('MenuDesplegable');
var toggle = false;
const DesplegarMenu = () =>{
    menu.classList.toggle('Active');
    if (toggle) {
        document.getElementById("Icono_De_Menu").src = 'https://raw.githubusercontent.com/gustavo-exe/Portafolio/955d16f64eabd635556d5a55d2a7a503b2069e82/imgs/icons/menu_black_24dp.svg';
    }else{
        document.getElementById("Icono_De_Menu").src = 'https://raw.githubusercontent.com/gustavo-exe/Portafolio/main/imgs/icons/icons8-eliminar-100.png';
    }
    toggle = !toggle; 
}
button.addEventListener('click',DesplegarMenu);