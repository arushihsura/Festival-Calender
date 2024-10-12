const festivals = [
    {
        name: "Vesak",
        date: "May 23, 2024",
        description: "Vesak, also known as Buddha Day, celebrates the birth, enlightenment, and death of Buddha. It is observed with meditation, prayers, and acts of kindness.",
        image: "images/vesak.jpg"
    },
    {
        name: "Asalha Puja",
        date: "July 19, 2024",
        description: "Asalha Puja commemorates the Buddha's first sermon, which he gave to his first five disciples. It is a day of reflection on the teachings of Buddhism.",
        image: "images/asalha_puja.jpg"
    },
    {
        name: "Magha Puja",
        date: "March 22, 2024",
        description: "Magha Puja celebrates the gathering of 1,250 of Buddha's disciples and his teachings on the importance of harmony and unity.",
        image: "images/magha_puja.jpg"
    },
    {
        name: "Loy Krathong",
        date: "November 15, 2024",
        description: "Loy Krathong is celebrated by floating decorated baskets on water to pay respect to the goddess of water. It is a beautiful festival marked by light and water rituals.",
        image: "images/loy_krathong.jpg"
    },
    {
        name: "Bodhi Day",
        date: "December 8, 2024",
        description: "Bodhi Day commemorates the day Siddhartha Gautama attained enlightenment and became the Buddha. It is celebrated with meditation, reading scriptures, and decorating with lights.",
        image: "images/bodhi_day.jpg"
    },
    {
        name: "Dhamma Day",
        date: "July 20, 2024",
        description: "Dhamma Day marks the first teaching of the Buddha after his enlightenment. It is a time for Buddhists to reflect on the Buddha's teachings and their application in daily life.",
        image: "images/dhamma_day.jpg"
    },
    {
        name: "Uposatha",
        date: "Every full moon and new moon day in 2024",
        description: "Uposatha is a day of intensified practice of meditation and observation of moral precepts. It is observed on the full moon and new moon days each month.",
        image: "images/uposatha.jpg"
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
