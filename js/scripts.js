mapboxgl.accessToken = 'pk.eyJ1IjoibWFyemlwYW45NCIsImEiOiJjanVrOTdwaDQxdG42NDRwNGFmbzY5dWdtIn0.4lVQxPc89QYzHas2IIWmew';

var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/outdoors-v11',
  center: [-73.985130, 40.758896],
  zoom: 10
});

map.on('load', function() {

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
        property: 'n_killed',
        stops: [
          [0, '#f7cdcd'],
          [5, '#ee9f9f'],
          [10, '#ea8888'],
          [20, '#e15e5e'],
          [30, '#dd4a4a'],
          [40, '#cc0000'],
        ]
      }
    }
  });
});





map.on('click', 'guns_', function (e) {
new mapboxgl.Popup()
.setLngLat(e.lngLat)
.setHTML(e.features[0].properties.n_killed)
.addTo(map);
});

// Change the cursor to a pointer when the mouse is over the guns_ layer.
map.on('mouseenter', 'guns_', function () {
map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'guns_', function () {
map.getCanvas().style.cursor = 'pointer';
});



/*/ source: http://bl.ocks.org/danswick/d813345baf286a5e0766c6b3d9de01c0
and chris whong /*/
