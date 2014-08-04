var url = "webworker_geomap.js"

var button = document.getElementById("button")

button.addEventListener("click",function(event){

  navigator.geolocation.getCurrentPosition(onSuccess, onError);

  function onSuccess(position){

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var coordinates = [latitude,longitude]

    var task = new Worker(url);
    task.postMessage(coordinates);

    task.onmessage = function(event) {
      var options = {
        icon: event.data
      };
      notification = new Notification("Hi there! Click me to show the map!",options);
      notification.onclick = function(){
        window.location = event.data;
      }
    }
  }

  function onError(error){
    notification = new Notification("We can find you! Not cool!");
  };
});