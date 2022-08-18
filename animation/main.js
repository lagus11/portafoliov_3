let animation = document.getElementById('sobre_mi');
    let animationImg = document.getElementById('img_sobre_mi');
    let posicionObj1 = animation.getBoundingClientRect().top;
    let tamPantalla = this.window.innerHeight * 0.7;

    if(posicionObj1 < tamPantalla){
        animation.style.animation = 'mover 1s ease-out';
        animationImg.style.animation = 'mover 1s ease-out';
    }


window.addEventListener('scroll', function(){
    let animation3 = document.getElementById('container_habilidades');
    let posicionObj3 = animation3.getBoundingClientRect().top;
    
    if(posicionObj3 < tamPantalla){
        animation3.style.animation = 'mover 1s ease-out';
    }
})