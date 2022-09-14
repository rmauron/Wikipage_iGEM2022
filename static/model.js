function setIframeSource_model1() {
    var theSelect = document.getElementById('model1');
    var theIframe = document.getElementById('myModel1');
    var theUrl;

    theUrl = theSelect.options[theSelect.selectedIndex].value;
    theIframe.src = theUrl;
}


function setIframeSource_model2() {
    var theSelect = document.getElementById('model2');
    var theIframe = document.getElementById('myModel2');
    var theUrl;

    theUrl = theSelect.options[theSelect.selectedIndex].value;
    theIframe.src = theUrl;
}
