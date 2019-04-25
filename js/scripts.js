

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyemlwYW45NCIsImEiOiJjanVrOTdwaDQxdG42NDRwNGFmbzY5dWdtIn0.4lVQxPc89QYzHas2IIWmew';

var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/outdoors-v11',
  center: [-73.985130, 40.758896],
  zoom: 10
});

map.on('load', function(){

  map.addSource('guns', {
    type: 'geojson',
    data: './data/map.geojson',
  });


      map.addLayer({
        id: 'guns_',
        type: 'fill',
        source: 'guns',
        paint: {
          'fill-color': {
            property: 'n_killed_t',
            stops: [[1, '#fff'], [40, '#f00']]
}
}
      });
      });
      /*/ http://bl.ocks.org/danswick/d813345baf286a5e0766c6b3d9de01c0 /*/
