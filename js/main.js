$(document).ready(function () {
    // EDIT: IS SCRITP WORKING
    // console.log("main.js working")
    // Initialize scrollers.
    $('#linex-description').simplebar({ autoHide: false });

    var ua = window.navigator.userAgent;
    var firefox = ua.toLowerCase().indexOf("firefox");
    var msie = ua.indexOf("MSIE ");

    if (firefox > -1) {

        if (innerHeight <= 768) {
            var marginLeft = (window.innerWidth / 2) - 420;
            $('#wrapper').css('margin-left', marginLeft + 'px');
        }
    }
    else if (msie > -1 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        if (window.innerHeight <= 768) {
            var marginLeft = (window.innerWidth / 2) - 420;
            $('#wrapper').css('margin-left', marginLeft + 'px');
        }
    }

});