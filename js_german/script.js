const container = document.getElementById('cardsContainer');
const gestureHint = document.getElementById('gestureHint');
const drivers = [
    {
        name: "Omar",
        city: "Zürich",
        experience: "Mehr als 20 Jahre Erfahrung als Taxifahrer in der Schweiz.",
        car: "Mercedes Benz V-class",
        seats: "7 Sitze",
        languages: "Deutsch, Englisch, Arabisch, Französisch",
        phone: "+41---------"
    }
];

function createCard(driver) {
    const card = document.createElement('div');
    card.className = 'driver-card';
    card.innerHTML = `
    <a href="images/${driver.name}.jpg" target="_blank" rel="noopener noreferrer">
        <div class="car-image"> <img src="images/${driver.name}.jpg" height="140" alt=""> </div></a>
        <div class="driver-info">
            <div class="driver-name">${driver.name}</div>
            <div class="driver-car">${driver.car}</div>
           <div class="driver-detail">
            <span class="detail-label">Stadt:</span>
            <span class="detail-value">${driver.city}</span>
            </div>
            <div class="driver-detail">
                <span class="detail-label">Sitze:</span>
                <span class="detail-value">${driver.seats}</span>
            </div>
            <div class="driver-detail">
                <span class="detail-label">Sprachen:</span>
                <span class="detail-value">${driver.languages}</span>
            </div>
            <div class="driver-experience">
                <strong>Erfahrung</strong>
                ${driver.experience}
            </div>
        </div>
        <div class="action-buttons">
            <a href="https://wa.me/${driver.phone.replace(/[^0-9]/g, '')}?text=Hello%20${driver.name},%20I'd%20like%20to%20book%20a%20taxi%20ride%20in%20Switzerland" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
                <span>💬</span> WhatsApp
            </a>
        </div>
    `;

    return card;
}

function render() {

    gestureHint.style.display = 'block';

    // Show card
    const card = createCard(drivers[0]);
    container.appendChild(card);
}


function resetDrivers() {
    render();
}

// Initial render
render();
