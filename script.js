document.addEventListener('DOMContentLoaded', () => {
    const apiKey = "G47cMzlZGMBEbSVBQ4DPN50wNXoUr7LN9ZI1IRYY";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetchApod(apiUrl);

    window.openModal = () => {
        document.getElementById('dateModal').style.display = 'flex';
    };
    window.closeModal = (modalId) => {
        document.getElementById(modalId).style.display = 'none';
    };

    window.openWelcomeModal = () => {
        document.getElementById('welcomeModal').style.display = 'flex';
    };

    window.fetchApodByDate = () => {
        const dateInput = document.getElementById('date-input').value;
        if (dateInput) {
            const dateUrl = `${apiUrl}&date=${dateInput}`;
            fetchApod(dateUrl);
            closeModal('dateModal');
        } else {
            alert("Please select a valid date.");
        }
    };

    function fetchApod(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById("apod-image").src = data.url;
                document.getElementById("apod-title").innerText = data.title;
                document.getElementById("apod-date").innerText = `Date: ${data.date}`;
                document.getElementById("apod-explanation").innerText = data.explanation;
            })
            .catch(error => {
                console.error("Error fetching APOD data:", error);
                document.getElementById("apod-title").innerText = "Error fetching data. Please try again later.";
            });
    }
});