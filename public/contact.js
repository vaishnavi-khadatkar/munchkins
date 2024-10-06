function initMap() {
    // Create a map object and specify the DOM element for display.
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 21.130872397224753, lng: 79.09845157420412 }, // Default to New Delhi
        zoom: 12
    });

    // Add a marker for the default location
    const marker = new google.maps.Marker({
        position: { lat:21.130872397224753 , lng: 79.09845157420412 },
        map: map,
        title: 'Manchkin Play School'
    });

    // Add a click event listener to add a marker at clicked location
    map.addListener('click', (event) => {
        const clickedLocation = event.latLng;
        marker.setPosition(clickedLocation);
        map.panTo(clickedLocation);
    });
}

// Load the Google Maps API and initialize the map
document.addEventListener('DOMContentLoaded', (event) => {
    initMap();
});


document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const form = document.getElementById('contactform'); // Reference the form
    const formData3 = new FormData(form); // Create FormData from the form
    const data = Object.fromEntries(formData3); // Convert FormData to a plain object
  
    fetch('/submit-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });