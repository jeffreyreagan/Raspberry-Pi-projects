function openpumpdata(modalId) {
    console.log('Opening pump data modal');
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    
    // Define the function to fetch and update pump data
    function fetchAndDisplayData() {
        // Define the endpoint based on the modalId
        var endpoint = '';
        if (modalId === 'pump1data') {
            endpoint = '/get_pump_1_monitordata';
        } else if (modalId === 'pump2data') {
            endpoint = '/get_pump_2_monitordata';
        } else if (modalId === 'pump3data') {
            endpoint = '/get_pump_3_monitordata';
        } else if (modalId === 'pump4data') {
            endpoint = '/get_pump_4_monitordata';
        } else if (modalId === 'pump5data') {
            endpoint = '/get_pump_5_monitordata';
        }

        // Fetch pump data from the server
        fetch(endpoint)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch alarm data');
                }
            })
            .then(data => {
                // Check if data contains all required properties
                if (data && data.timestamps && data.current && data.frequency && data.voltage && data.wattage) {
                    // Construct the content string
                    var content = "";
                    var timestamps = data.timestamps;
                    var current = data.current;
                    var frequency = data.frequency;
                    var voltage = data.voltage;
                    var wattage = data.wattage;
                    for (var i = 0; i < timestamps.length; i++) {
                        content += timestamps[i] + ": " + current[i] + " A, " + frequency[i] + " Hz, " + voltage[i] + " V, " + wattage[i] + " W<br>";
                    }
                    // Update the content of the timestamps element inside the specified modal
                    var timestampsElement = document.getElementById(modalId + "timestamps");
                    timestampsElement.innerHTML = content;
                } else {
                    console.error('Invalid data structure');
                }
            })
            .catch(error => {
                console.error('Error fetching alarm data:', error);
            });
    }

    // Call the function immediately
    fetchAndDisplayData();

    // Set interval to refresh data every second
    var intervalId = setInterval(fetchAndDisplayData, 1000);

    // Function to close the modal
    function closeAlarmHistory(modalId) {
        var modal = document.getElementById(modalId);
        modal.style.display = "none";
        clearInterval(intervalId); // Stop the interval when modal is closed
    }

    // Close the modal when clicking outside of it
    window.onclick = function(event) {
        var modals = document.getElementsByClassName('modal');
        for (var i = 0; i < modals.length; i++) {
            var modal = modals[i];
            if (event.target == modal) {
                modal.style.display = "none";
                clearInterval(intervalId); // Stop the interval when modal is closed
            }
        }
    }
}