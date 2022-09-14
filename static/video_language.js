function setIframeSource() {
    var theSelect = document.getElementById('language');
    var theIframe = document.getElementById('myPromovideo');
    var theUrl;

    theUrl = theSelect.options[theSelect.selectedIndex].value;
    theIframe.src = theUrl;
}