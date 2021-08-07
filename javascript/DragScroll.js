const slider = document.querySelector('.Grid');
let isDown = false;
let startx;
let scrolLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    //console.log(e.pageX); Es igual a clientX
    startx = e.pageX - slider.offsetLeft;
    scrolLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startx;
    slider.scrollLeft = scrolLeft - walk;
});