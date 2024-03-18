// Define global variable for Chart.js instance
var pumpChart;

// Function to open the modal and start updating the chart
function openpumpdata(modalId) {
    console.log('Opening pump data modal');
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    
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

    // Fetch pump data from the server and update the chart
    fetchAndUpdateChart(endpoint);
  
    // Update the chart every second
    setInterval(function() {
        fetchAndUpdateChart(endpoint);
    }, 1000);
}

// Function to fetch pump data from the server and update the chart
function fetchAndUpdateChart(endpoint) {
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
                // Update the chart with new data
                updateChart(data.timestamps, data.current, data.frequency, data.voltage, data.wattage);
            } else {
                console.error('Invalid data structure');
            }
        })
        .catch(error => {
            console.error('Error fetching alarm data:', error);
        });
}

// Function to update the Chart.js chart
function updateChart(timestamps, current, frequency, voltage, wattage) {
    // Ensure the Chart.js instance is created
    if (!pumpChart) {
        var ctx = document.getElementById('pumpChart').getContext('2d');
        pumpChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: timestamps,
                datasets: [{
                    label: 'Current',
                    data: current,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Frequency',
                    data: frequency,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Voltage',
                    data: voltage,
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Wattage',
                    data: wattage,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } else {
        // Update the chart with new data
        pumpChart.data.labels = timestamps;
        pumpChart.data.datasets[0].data = current;
        pumpChart.data.datasets[1].data = frequency;
        pumpChart.data.datasets[2].data = voltage;
        pumpChart.data.datasets[3].data = wattage;
        pumpChart.update();
    }
}

// Function to close the modal
function closeAlarmHistory(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        var modal = modals[i];
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
