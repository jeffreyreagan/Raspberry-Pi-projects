var windmillpowerchart;




function openwindmillpowerchart() {
    // Define the endpoint based on the modalId
    var cccendpoint = '/get_data_windmills';
    // Fetch pump data from the server and update the chart
    fetchAndUpdateChart4(cccendpoint);
    
    // Update the chart every second
    setInterval(function() {
        fetchAndUpdateChart4(cccendpoint);
    }, 4000);
}

setTimeout(openwindmillpowerchart(),2000);

//async function
// Function to fetch pump data from the server and update the chart
function fetchAndUpdateChart4(cccendpoint) {
    fetch(cccendpoint)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch alarm data');
            }
        })
        .then(data => {
            if (data && data.timestamps && data.storedKW1 && data.storedKW2 && data.storedKW3) {
                // Store the fetched data
                fetchedData2 = data;
                // Update the chart with new data
                initializeChart4OutsideModal(data.timestamps, data.storedKW1, data.storedKW2, data.storedKW3);
            } else {
                console.error('Invalid data structure');
            }
        })
        .catch(error => {
            console.error('Error fetching alarm data:', error);
        });
}

 // Current index of the first data point displayed
var numDataPoints = 5; 

// Function to initialize the chart outside the modal
function initializeChart4OutsideModal(timestamps, storedKW1, storedKW2, storedKW3) {
    // Ensure the Chart.js instance is created
    if (!windmillpowerchart) {
        var ccctx = document.getElementById('windmillpowerchart').getContext('2d');
        windmillpowerchart = new Chart(ccctx, {
            type: 'bar',
            data: {
                labels: timestamps.slice(-60), // Display only the last 60 labels initially
                datasets: [{
                    label: 'Windmill 1 KW',
                    data: storedKW1.slice(-60), // Display only the last 60 data points initially
                    borderColor: 'rgba(255, 200, 132, 1)',
                    borderWidth: 1
                },{
                    label: 'Windmill 2 KW',
                    data: storedKW2.slice(-60), // Display only the last 60 data points initially
                    borderColor: 'rgba(44, 255, 23, 0.8)',
                    borderWidth: 1
                },{
                    label: 'Windmill 3 KW',
                    data: storedKW3.slice(-60), // Display only the last 60 data points initially
                    borderColor: 'rgba(23, 219, 255, 0.8)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false
                    }
                },
                plugins: {
                    tooltip: {
                        enabled: true
                    }
                }
            }
        });
    } else {
        // Update the chart with new data
        updateChartData4(timestamps, storedKW1, storedKW2, storedKW3);
    }
}

// Function to update chart data when scrolling left
function scrollRightt(timestamps, storedKW1, storedKW2, storedKW3) {
    currentindexxx += 10; // Move forward by 10 data points
    console.log(currentindexxx);
    updateChartData4(timestamps, storedKW1, storedKW2, storedKW3);
}

function scrolleftt(timestamps, storedKW1, storedKW2, storedKW3) {
    currentindexxx -= 10; // Move back by 10 data points
    console.log(currentindexxx);
    updateChartData4(timestamps, storedKW1, storedKW2, storedKW3);
}

// Function to update chart data
function updateChartData4(timestamps, storedKW1, storedKW2, storedKW3) {
    windmillpowerchart.data.labels = timestamps.slice(currentindexxx);
    windmillpowerchart.data.datasets[0].data = storedKW1.slice(currentindexxx);
    windmillpowerchart.data.datasets[1].data = storedKW2.slice(currentindexxx);
    windmillpowerchart.data.datasets[2].data = storedKW3.slice(currentindexxx);
    console.log('should be updating')
    console.log(currentindexxx)
    windmillpowerchart.update();
}
    
    
    // Add event listeners to the left and right arrow buttons

