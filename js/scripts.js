

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyemlwYW45NCIsImEiOiJjanVrOTdwaDQxdG42NDRwNGFmbzY5dWdtIn0.4lVQxPc89QYzHas2IIWmew';

var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/outdoors-v11',
  center: [-73.985130, 40.758896],
  zoom: 10
});

map.addSource('guns', {
  type: 'geojson',
  data: './data/map.geojson',
});


map.on('load', function(){


      map.addLayer({
        id: 'guns_',
        type: 'fill',
        source: 'guns',
        paint: {
          'fill-color': [
            // use a curve (http://bl.ocks.org/anandthakker/raw/6d0269825a7e0381cdcde13f84a0b6b0/#types-expression-curve)
            // of type "step," which will step through each break instead of interpolating between them.
            // Then, get the density value and use a `number` expression to return it as a number instead of a string.
            // Each step is then a pair [{color code}, {max value for break}]
            // Finally, add a default color code for any features that fall outside of the steps you've defined.
            "curve",
              ["step"], ["number", ["get", "n_killed_t"], 1], "#FFEDA0", 10, "#FED976", 20, "#FEB24C", 50, "#FD8D3C", 100, "#FC4E2A", 200, "#E31A1C", 500, "#BD0026", 2000, "#000000"
          ],
          'fill-opacity': 0.6
        },
        layout: {}
      });
      });
