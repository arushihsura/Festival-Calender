const festivals = [
    {
        name: "Eid al-Fitr",
        date: "April 10, 2024",
        description: "Eid al-Fitr marks the end of Ramadan, the Islamic holy month of fasting. It is celebrated with prayers, feasts, and giving of zakat (charity).",
        image: "images/eid_al_fitr.jpg"
    },
    {
        name: "Eid al-Adha",
        date: "June 17, 2024",
        description: "Eid al-Adha, also known as the 'Festival of Sacrifice', honors the willingness of Ibrahim to sacrifice his son as an act of obedience to God. It is celebrated with special prayers, feasts, and the distribution of meat to the needy.",
        image: "images/eid_al_adha.jpg"
    },
    {
        name: "Islamic New Year (Hijri New Year)",
        date: "July 7, 2024",
        description: "The Islamic New Year marks the beginning of the new Islamic calendar year. It is a time for reflection and prayer.",
        image: "images/islamic_new_year.jpg"
    },
    {
        name: "Ashura",
        date: "July 16, 2024",
        description: "Ashura is observed on the 10th day of Muharram and commemorates the martyrdom of Imam Hussain, the grandson of Prophet Muhammad. It is a day of mourning for Shia Muslims and a day of fasting for Sunni Muslims.",
        image: "images/ashura.jpg"
    },
    {
        name: "Mawlid al-Nabi",
        date: "September 25, 2024",
        description: "Mawlid al-Nabi celebrates the birth of Prophet Muhammad. The day is marked with prayers, recitations of the Quran, and sermons recounting the life of the Prophet.",
        image: "images/mawlid_al_nabi.jpg"
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
