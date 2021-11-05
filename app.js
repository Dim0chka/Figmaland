// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 55.8154104, lng: 37.830208 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12.22,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }