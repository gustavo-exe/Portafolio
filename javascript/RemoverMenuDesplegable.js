const Menu = document.getElementById('MenuDesplegable');

const RemoverMenu = () =>{
    Menu.classList.remove('Active')
    document.getElementById("Icono_De_Menu").src = 'https://raw.githubusercontent.com/gustavo-exe/Portafolio/955d16f64eabd635556d5a55d2a7a503b2069e82/imgs/icons/menu_black_24dp.svg';
}
Enlace.addEventListener('click',RemoverMenu);