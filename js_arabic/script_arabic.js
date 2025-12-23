const container = document.getElementById('cardsContainer');
const counter = document.getElementById('counter');
const gestureHint = document.getElementById('gestureHint');
const drivers = [
  {
    name: "عمر",
    english_name: "Omar",
    city: "زيورخ",
    experience: "خبير في الطرق السويسرية والمعالم المحلية",
    car: "مرسيدس بنز الفئة V",
    seats: "7 ركاب",
    languages: "العربية، الفرنسية، الإنجليزية، الإسبانية",
    phone: "+41---------"
  }
];

function createCard(driver) {
    const card = document.createElement('div');
    card.className = 'driver-card';
    card.innerHTML = `
    <a href="images/${driver.english_name}.jpg" target="_blank" rel="noopener noreferrer">
        <div class="car-image"> <img src="images/${driver.english_name}.jpg" height="140" alt=""> </div></a>
        <div class="driver-info">
            <div class="driver-name">${driver.name}</div>
            <div class="driver-car">${driver.car}</div>
            <div class="driver-detail">
                <span class="detail-label">المدينة:</span>
                <span class="detail-value">${driver.city}</span>
            </div>
            <div class="driver-detail">
                <span class="detail-label">السعة:</span>
                <span class="detail-value">${driver.seats}</span>
            </div>
            <div class="driver-detail">
                <span class="detail-label">اللغات:</span>
                <span class="detail-value">${driver.languages}</span>
            </div>
            <div class="driver-experience">
                <strong>الخبرة</strong>
                ${driver.experience}
            </div>
        </div>
        <div class="action-buttons">
            <a href="https://wa.me/${driver.phone.replace(/[^0-9]/g, '')}?text=مرحباً%20${driver.name}%20،%20أرغب%20في%20حجز%20رحلة%20تاكسي%20في%20سويسرا" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
                <span>💬</span> واتساب
            </a>
        </div>
    `;
    return card;
}

function render() {
  
    gestureHint.style.display = 'block';

    // عرض البطاقة الحالية والتالية
    const card = createCard(drivers[0]);
    container.appendChild(card);
}

// العرض الأولي
render();
