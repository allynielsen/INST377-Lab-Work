async function windowActions() {
  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
  const request = await fetch(endpoint);
  const zip = await request.json();
  const htmlTarget = document.querySelector('.append-box');
  const searchInput = document.querySelector('#zip');

  function findMatches(wordToMatch) {
    return zip.filter((place, index) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.zip.match(regex);
    });
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, zip);
    const html = matchArray.map((place) => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(regex, `<span class="h1"> ${this.value}</span}`);
      return `
      <ul>
        <li>
          <span class="name>${place.name} </br> 
          ${place.address_line_1} </br>
          ${place.city} </br>
          ${place.zip} </br>
          , </br>
          </span>
        </li>
      </ul>
      `
    }).join('');
    htmlTarget.innerHTML = html;
  }
  searchInput.addEventListener('keyup', (evt) => { displayMatches(evt); });
}
window.onload = windowActions;