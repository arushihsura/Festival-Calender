const festivals = [
    {
        name: "Makar Sankranti",
        date: "January 14, 2024",
        description: "Makar Sankranti marks the transition of the Sun into the zodiac sign of Makara (Capricorn) on its celestial path. It is celebrated with kite flying, feasts, and various regional customs.",
        image: "images/makar_sankranti.jpg"
    },
    {
        name: "Pongal",
        date: "January 15, 2024",
        description: "Pongal is a harvest festival celebrated mainly in Tamil Nadu. It involves boiling the first rice of the season in milk and allowing it to overflow as a symbol of abundance.",
        image: "images/pongal.jpg"
    },
    {
        name: "Vasant Panchami",
        date: "February 14, 2024",
        description: "Vasant Panchami celebrates the arrival of spring and is dedicated to the goddess Saraswati, the deity of knowledge and arts. People wear yellow and engage in educational and artistic activities.",
        image: "images/vasant_panchami.jpg"
    },
    {
        name: "Maha Shivaratri",
        date: "March 8, 2024",
        description: "Maha Shivaratri is dedicated to Lord Shiva. Devotees observe fasts, perform night-long vigils, and offer prayers to honor the deity.",
        image: "images/maha_shivaratri.jpg"
    },
    {
        name: "Holi",
        date: "March 25, 2024",
        description: "Holi, the festival of colors, celebrates the arrival of spring and victory of good over evil. People throw colored powders, sing, dance, and enjoy festive foods.",
        image: "images/holi.jpg"
    },
    {
        name: "Hanuman Jayanti",
        date: "April 10, 2024",
        description: "Hanuman Jayanti celebrates the birth of Lord Hanuman, the devoted follower of Lord Rama. Devotees engage in prayers, recitations of Hanuman Chalisa, and charitable activities.",
        image: "images/hanuman_jayanti.jpg"
    },
    {
        name: "Rama Navami",
        date: "April 17, 2024",
        description: "Rama Navami marks the birth of Lord Rama, an avatar of Vishnu. The day is observed with fasting, chanting, and reenactments of scenes from the Ramayana.",
        image: "images/rama_navami.jpg"
    },
    {
        name: "Raksha Bandhan",
        date: "August 19, 2024",
        description: "Raksha Bandhan celebrates the bond between brothers and sisters. Sisters tie a rakhi (sacred thread) on their brothers' wrists, and brothers promise to protect them.",
        image: "images/raksha_bandhan.jpg"
    },
    {
        name: "Janmashtami",
        date: "August 26, 2024",
        description: "Janmashtami celebrates the birth of Lord Krishna. Devotees observe fasts, sing devotional songs, and reenact scenes from Krishna's life.",
        image: "images/janmashtami.jpg"
    },
    {
        name: "Ganesh Chaturthi",
        date: "September 7, 2024",
        description: "Ganesh Chaturthi honors Lord Ganesha, the remover of obstacles. It involves installing Ganesha idols, performing prayers, and immersing the idols in water after festivities.",
        image: "images/ganesh_chaturthi.jpg"
    },
    {
        name: "Navaratri",
        date: "October 3-11, 2024",
        description: "Navaratri is a nine-night festival celebrating the divine feminine. Each day is dedicated to a different aspect of Goddess Durga, with fasting, dancing (Garba/Dandiya), and worship.",
        image: "images/navaratri.jpg"
    },
    {
        name: "Durga Puja",
        date: "October 2-6, 2024",
        description: "Durga Puja celebrates Goddess Durga's victory over the buffalo demon Mahishasura. It involves elaborate decorations, cultural performances, and community feasts.",
        image: "images/durga_puja.jpg"
    },
    {
        name: "Diwali",
        date: "November 12, 2024",
        description: "Diwali, the festival of lights, symbolizes the victory of light over darkness and good over evil. Celebrations include lighting lamps, fireworks, exchanging gifts, and feasting.",
        image: "images/diwali.jpg"
    },
    {
        name: "Bhai Dooj",
        date: "November 14, 2024",
        description: "Bhai Dooj celebrates the bond between brothers and sisters. Sisters perform aarti for their brothers and pray for their well-being, while brothers give gifts in return.",
        image: "images/bhai_dooj.jpg"
    },
    {
        name: "Kartik Purnima",
        date: "November 29, 2024",
        description: "Kartik Purnima is celebrated as a sacred day in Hinduism. It marks the end of the four-month autumn season. Devotees take holy dips in rivers and perform religious rituals.",
        image: "images/kartik_purnima.jpg"
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

img.onerror = () => { img.src = 'https://via.placeholder.com/300x200?text=No+Image'; };
