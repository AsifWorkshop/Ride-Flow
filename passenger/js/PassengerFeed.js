document.addEventListener("DOMContentLoaded", function () {
    console.log("Passenger Feed JS Loaded !");

    // Function to fetch passenger feed and active rides data from backend
    function fetchPassengerFeedData() {
        /*
        // Native Fetch API implementation (commented out until backend endpoint is live)
        fetch('../api/passenger/feed.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched passenger data successfully:", data);
            // TODO: Dynamically populate tables (active rides, available routes) with data here
        })
        .catch(error => {
            console.error('Error fetching passenger feed data:', error);
        });
        */
    }

    // Call the function on page load
    fetchPassengerFeedData();
});