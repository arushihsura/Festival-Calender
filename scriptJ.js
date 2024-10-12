const festivals = [
    {
        name: "Paryushana",
        date: "August 17 - August 25, 2024",
        description: "Paryushana is an important Jain festival focused on self-discipline and spiritual development. It includes fasting, meditation, and recitation of scriptures.",
        image: "images/paryushana.jpg"
    },
    {
        name: "Mahavir Jayanti",
        date: "April 12, 2024",
        description: "Mahavir Jayanti celebrates the birth of Lord Mahavir, the 24th Tirthankara. It is observed with prayers, processions, and community gatherings.",
        image: "images/mahavir_jayanti.jpg"
    },
    {
        name: "Diwali",
        date: "November 12, 2024",
        description: "For Jains, Diwali marks the attainment of nirvana by Lord Mahavir. The day is celebrated with lighting lamps, prayers, and festive meals.",
        image: "images/diwali.jpg"
    },
    {
        name: "Kartik Purnima",
        date: "November 15, 2024",
        description: "Kartik Purnima is celebrated with fasting and prayers. It is believed that on this day, Lord Mahavir achieved liberation from the cycle of birth and death.",
        image: "images/kartik_purnima.jpg"
    },
    {
        name: "Ajeet Jayanti",
        date: "January 5, 2024",
        description: "Ajeet Jayanti marks the birth of Lord Ajeet, one of the 24 Tirthankaras. The day is observed with religious ceremonies and prayers.",
        image: "images/ajit_jayanti.jpg"
    },
    {
        name: "Samtanath Jayanti",
        date: "August 6, 2024",
        description: "Samtanath Jayanti celebrates the birth of Samtanath, a revered Tirthankara. It is a day of religious observance and community gatherings.",
        image: "images/samtanath_jayanti.jpg"
    },
    // Add more festivals as needed
];

document.addEventListener('DOMContentLoaded', () => {
    const festivalList = document.getElementById('festival-list');
    const searchInput = document.getElementById('search-input');

    /**
     * Renders the list of festivals to the DOM.
     * @param {Array} festivalsToRender - Array of festival objects to display.
     */
    function renderFestivals(festivalsToRender) {
        festivalList.innerHTML = ''; // Clear existing content

        if (festivalsToRender.length === 0) {
            festivalList.innerHTML = '<p>No festivals found.</p>';
            return;
        }

        festivalsToRender.forEach(festival => {
            // Create festival card
            const card = document.createElement('div');
            card.className = 'festival-card';

            // Festival image
            const img = document.createElement('img');
            img.src = festival.image;
            img.alt = `${festival.name} image`;
            img.onerror = () => { img.src = 'https://via.placeholder.com/300x200?text=No+Image'; }; // Fallback image

            // Content container
            const content = document.createElement('div');
            content.className = 'content';

            // Festival name
            const title = document.createElement('h2');
            title.textContent = festival.name;

            // Festival date
            const date = document.createElement('p');
            date.className = 'date';
            date.textContent = `Date: ${festival.date}`;

            // Festival description
            const description = document.createElement('p');
            description.className = 'description';
            description.textContent = festival.description;

            // Append elements to content
            content.appendChild(title);
            content.appendChild(date);
            content.appendChild(description);

            // Append image and content to card
            card.appendChild(img);
            card.appendChild(content);

            // Append card to festival list
            festivalList.appendChild(card);
        });
    }

    // Initial render of all festivals
    renderFestivals(festivals);

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredFestivals = festivals.filter(festival => 
            festival.name.toLowerCase().includes(query) ||
            festival.description.toLowerCase().includes(query)
        );
        renderFestivals(filteredFestivals);
    });
});
