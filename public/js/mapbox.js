/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoieGVsZW0iLCJhIjoiY2wxdXhtNGhsMDNjMDNlcjFpbzkyZ3VreiJ9.R1hM3B-K8aVXHwHyctn6pg';

  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/xelem/cl1vfvvhe000314msqn93ab2e', // style URL
    scrollZoom: false,
    //   center: [-118.263464, 34.025852], // starting position [lng, lat]
    //   zoom: 9, // starting zoom
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to includer current locatons
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
