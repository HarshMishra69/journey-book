const form = document.getElementById('journeyForm');
const journeysList = document.getElementById('journeysList');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const startLocation = document.getElementById('startLocation').value;
  const destination = document.getElementById('destination').value;
  const date = document.getElementById('date').value;
  const details = document.getElementById('details').value;

  createJourney(startLocation, destination, date, details);
  form.reset();
});

function createJourney(startLocation, destination, date, details) {
  const journey = document.createElement('div');
  journey.classList.add('journey');
  journey.innerHTML = `
    <h3>From: ${startLocation} - To: ${destination}</h3>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Details:</strong> ${details}</p>
    <button onclick="joinJourney()">Join</button>
  `;
  journeysList.appendChild(journey);
}

function joinJourney() {
  // Implement your join journey logic here
  alert('You have joined this journey!');
}
