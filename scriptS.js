const festivals = [
    {
        name: "Vaisakhi",
        date: "April 13, 2024",
        description: "Vaisakhi is a major Sikh festival that marks the harvest season and the founding of the Khalsa in 1699. It is celebrated with processions, prayers, and community feasts.",
        image: "images/vaisakhi.jpg"
    },
    {
        name: "Guru Nanak Jayanti",
        date: "November 15, 2024",
        description: "Guru Nanak Jayanti, also known as Gurpurab, celebrates the birth of Guru Nanak, the founder of Sikhism. Celebrations include reading from the Guru Granth Sahib and processions.",
        image: "images/guru_nanak_jayanti.jpg"
    },
    {
        name: "Guru Gobind Singh Jayanti",
        date: "January 5, 2024",
        description: "Guru Gobind Singh Jayanti celebrates the birth of Guru Gobind Singh, the tenth Sikh Guru. The day is marked by prayers, hymns, and community gatherings.",
        image: "images/guru_gobind_singh_jayanti.jpg"
    },
    {
        name: "Diwali",
        date: "November 12, 2024",
        description: "Diwali, also celebrated by Sikhs, marks the return of Guru Hargobind Ji to Amritsar after being released from imprisonment. It is celebrated with lighting lamps and fireworks.",
        image: "images/diwali.jpg"
    },
    {
        name: "Bandi Chhor Divas",
        date: "November 12, 2024",
        description: "Bandi Chhor Divas celebrates Guru Hargobind Ji's release from imprisonment. It coincides with Diwali and is marked by lighting of lamps and prayers.",
        image: "images/bandi_chhor_divas.jpg"
    },
    {
        name: "Rakhri",
        date: "August 19, 2024",
        description: "Rakhri, or Raksha Bandhan, is also observed by Sikhs to celebrate the bond between brothers and sisters. Sisters tie a rakhi on their brothers' wrists, and brothers give gifts.",
        image: "images/rakhri.jpg"
    },
    {
        name: "Sahibzada Ajit Singh Martyrdom Day",
        date: "December 7, 2024",
        description: "Sahibzada Ajit Singh Martyrdom Day honors Sahibzada Ajit Singh, the eldest son of Guru Gobind Singh, who sacrificed his life for the principles of Sikhism.",
        image: "images/sahibzada_ajit_singh.jpg"
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
