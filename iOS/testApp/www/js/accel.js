function onLoad()
{
    document.addEventListener("deviceready",onDeviceReady,false);
    alert("onLoad Fired!")
}


function checkAccel() {
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}


function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
}


function onError() {
    alert('onError!');
}