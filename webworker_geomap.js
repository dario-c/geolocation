self.onmessage = function(coordinates) {
self.postMessage("http://www.mapquestapi.com/staticmap/v4/getplacemap?key=Fmjtd%7Cluur256rnu%2Ca2%3Do5-9a1agz&location="+coordinates.data+"&size=600,600&type=map&zoom=16&imagetype=jpg&showicon=red_1-1");
}