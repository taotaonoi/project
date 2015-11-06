function init(){
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady(){
    document.getElementById("device").innerHTML = "device is ready!";
}

function record(){
    var options = { limit: 1 };
    navigator.device.capture.captueAudo(onSuccess, onFail, options);
}

function onSuccess(mediaFiles){
    path = mediaFiles[0].fullPath;

    var myvdo = document.getElementById("myaudio");
    myvdo.style.display = 'block';
    myvdo.src = path;

    document.getElementById("result").innerHTML = "Record Success!!" + path;
}

function onFail(error){
    alert('Error code: ' + error.code, null, 'Capture Error');
    document.getElementById("result").innerHTML = "Not Success!!";
}