function search() {
  let search_item = document.getElementById("input").value;

  document.getElementById("map-container").innerHTML = `<iframe
  class="gmap_iframe"
  id="map"
  frameborder="0"
  scrolling="no"
  marginheight="0"
  marginwidth="0"
  src="https://maps.google.com/maps?hl=en&amp;q=${search_item}&amp;t=&amp;z=8&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
></iframe>`;
}
