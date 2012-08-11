function onLoad()
{
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady()
{
    
    phoneGapReady.innerHTML = ("")
    alert("Working");
}

// alert dismissed
function alertDismissed() {
    
}

// Show a custom alert
function showAlert() {
    navigator.notification.alert(
                                 'Working',
                                 alertDismissed, // callback
                                 'Alert Demo', 
                                 'Finished' 
                                 );
}

// process the confirmation result
function onConfirm(button) {
    alert('You selected button ' + button);
}

// Show a custom confirmation dialog
//
function showConfirm() {
    navigator.notification.confirm(
                                   'Confirm Works!', 
                                   onConfirm, // callback to invoke with index of button pressed
                                   'Confirm Demo', 
                                   'Restart,Exit' 
                                   );
}
