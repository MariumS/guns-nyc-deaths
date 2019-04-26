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
          [50, '#cc0000'],
        ]
      }
    }
  });
  // Create a popup, but don't add it to the map yet.
  var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });

  map.on('mouseenter', 'ZCTA5CE10', function(e) {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = 'pointer';

    var feature = e.features[0];

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(e.bbox)
      .setHTML(`
      <h4>${feature.properties.ZCTA5CE10}</h4><br/>
      <p>Population: ${numeral(feature.properties.n_killed).format('0.0a')}</p>
    `)
      .addTo(map);
  });

  map.on('mouseleave', 'ZCTA5CE10', function() {
    map.getCanvas().style.cursor = '';
    popup.remove();
  });


});

/*/ source: http://bl.ocks.org/danswick/d813345baf286a5e0766c6b3d9de01c0 /*/
