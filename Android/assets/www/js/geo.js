// Load Phonegap

document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready

function $(x){
    var theElement = document.getElementById(x);
    return theElement;
};

function toggleControls(n){
    switch(n){
        case "on":
            $("mapOutline").style.display = "block";
        break;
        case "off":
            $("mapOutline").style.display = "none";
            break;
        default:
            return false;
    }
}

function onDeviceReady() {
    toggleControls("off");
   }



function checkGeo() {
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true });
}

// onSuccess Geolocation
//
var onSuccess = function(position) {
    toggleControls("on");
    var largeMap = document.getElementById('map');
    
    largeMap.src = "http://maps.googleapis.com/maps/api/staticmap?center=" +
                    position.coords.latitude + "," +
                    position.coords.longitude +
                    "&zoom=14&size=780x400&markers=color:red%7Ccolor:red%7C" +
                    position.coords.latitude + "," +
                    position.coords.longitude + "&sensor=false";
    
};

// PositionError object call back for onError
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}