window.addEventListener('scroll', revealfromtop);

function revealfromtop(){
    var reveals = document.querySelectorAll('.revealfromtop');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 300;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('activeonscrolltop');
        }
        // REMOVE THIS PART TO LET THE CONTENT FIX. THE EFFECT APPEARS ONLY ONCE
        //else{
        //    reveals[i].classList.remove('activeonscrolltop');
        //}
    }
}
