
window.addEventListener('scroll', revealfromtop);

function revealfromtop(){
    var reveals = document.querySelectorAll('.revealfromtop');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('activeonscrolltop');
        }
        else{
            reveals[i].classList.remove('activeonscrolltop');
        }
    }
}
