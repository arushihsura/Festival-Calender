const festivals = [
    {
        name: "Epiphany",
        date: "January 6, 2024",
        description: "Epiphany, also known as Three Kings' Day, celebrates the revelation of God incarnate as Jesus Christ. It is observed with church services, special meals, and gift-giving.",
        image: "images/epiphany.jpg"
    },
    {
        name: "Ash Wednesday",
        date: "February 14, 2024",
        description: "Ash Wednesday marks the beginning of Lent, a 40-day period of fasting and repentance leading up to Easter. Worshippers receive ashes on their foreheads as a symbol of mortality and penance.",
        image: "images/ash_wednesday.jpg"
    },
    {
        name: "Palm Sunday",
        date: "March 24, 2024",
        description: "Palm Sunday commemorates Jesus' triumphant entry into Jerusalem, an event mentioned in each of the four canonical Gospels. Worshippers often carry palm branches during church services.",
        image: "images/palm_sunday.jpg"
    },
    {
        name: "Good Friday",
        date: "March 29, 2024",
        description: "Good Friday is observed in memory of the crucifixion of Jesus Christ and his death at Calvary. It is a day of mourning and penance, marked by fasting and church services.",
        image: "images/good_friday.jpg"
    },
    {
        name: "Easter Sunday",
        date: "March 31, 2024",
        description: "Easter Sunday celebrates the resurrection of Jesus Christ from the dead, a foundational event in Christianity. The day is marked by joyous church services, feasting, and the exchange of Easter eggs.",
        image: "images/easter.jpg"
    },
    {
        name: "Ascension Day",
        date: "May 9, 2024",
        description: "Ascension Day commemorates the ascension of Jesus into heaven, occurring 40 days after his resurrection. It is observed with church services and prayers.",
        image: "images/ascension_day.jpg"
    },
    {
        name: "Pentecost",
        date: "May 19, 2024",
        description: "Pentecost, also known as Whitsunday, celebrates the descent of the Holy Spirit upon the apostles and other followers of Jesus. It is considered the 'birthday' of the Christian Church.",
        image: "images/pentecost.jpg"
    },
    {
        name: "All Saints' Day",
        date: "November 1, 2024",
        description: "All Saints' Day honors all the saints, known and unknown. It is a day to remember the faithful who have entered heaven, often marked by church services and lighting of candles.",
        image: "images/all_saints_day.jpg"
    },
    {
        name: "Advent",
        date: "December 1-24, 2024",
        description: "Advent is the season of preparation for Christmas, observed with the lighting of Advent candles, special prayers, and reflections on the coming of Jesus Christ.",
        image: "images/advent.jpg"
    },
    {
        name: "Christmas Day",
        date: "December 25, 2024",
        description: "Christmas Day celebrates the birth of Jesus Christ. It is a major holiday in Christianity, marked by church services, the exchange of gifts, and festive meals.",
        image: "images/christmas.jpg"
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
