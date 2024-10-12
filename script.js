const festivals = {
    hindu: [
        { name: "Diwali", date: "November 12, 2024" },
        { name: "Holi", date: "March 25, 2024" },
    ],
    muslim: [
        { name: "Eid al-Fitr", date: "April 21, 2024" },
        { name: "Eid al-Adha", date: "June 28, 2024" },
    ],
    christian: [
        { name: "Christmas", date: "December 25, 2024" },
        { name: "Easter", date: "March 31, 2024" },
    ],
    sikh: [
        { name: "Vaisakhi", date: "April 14, 2024" },
        { name: "Guru Nanak Jayanti", date: "November 15, 2024" },
    ],
    buddhist: [
        { name: "Buddha Purnima", date: "May 23, 2024" },
    ],
    jain: [
        { name: "Mahavir Jayanti", date: "April 9, 2024" },
        { name: "Paryushana", date: "September 1-8, 2024" },
    ]
};

function showFestivals(religion) {
    const festivalList = document.getElementById('festival-list');
    festivalList.innerHTML = `<h2>${religion.charAt(0).toUpperCase() + religion.slice(1)} Festivals</h2>`;
    
    const festivalsArray = festivals[religion];
    if (festivalsArray) {
        festivalsArray.forEach(festival => {
            const festivalItem = document.createElement('p');
            festivalItem.textContent = `${festival.name}: ${festival.date}`;
            festivalList.appendChild(festivalItem);
        });
    } else {
        festivalList.innerHTML += '<p>No festivals found.</p>';
    }
}

