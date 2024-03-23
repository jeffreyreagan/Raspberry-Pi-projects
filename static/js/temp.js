// Define global variable for Chart.js instance
var pumpChart;
var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true,
        showTooltips: true,
        multiTooltipTemplate: "<%= value %>",
    });
// Function to open the modal and start updating the chart

function openpumpdata(modalId) {
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
    }, 3000);
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
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
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
        pumpChart.data.labels = timestamps;
        pumpChart.data.datasets[0].data = current;
        pumpChart.data.datasets[1].data = frequency;
        pumpChart.data.datasets[2].data = voltage;
        pumpChart.data.datasets[3].data = wattage;

        // Remove old data points if exceeding 10 labels
        if (pumpChart.data.labels.length > 60) {
            pumpChart.data.labels = pumpChart.data.labels.slice(-60);
            pumpChart.data.datasets.forEach(dataset => {
                dataset.data = dataset.data.slice(-60);
            });
        }

        pumpChart.update();
    }
}
// Function to close the modal
function closeAlarmHistory(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
    clearInterval(fetchAndUpdateChart)
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
};














var ccctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ccctx).Line(lineChartData, {
        responsive: true,
        showTooltips: true,
        multiTooltipTemplate: "<%= value %>",
    });

// Initial call to start updating data and rendering the chart. Had to add timeout for errors.
var pumptotalChartOutside;




function openaveragepumpdata_outside() {
    // Define the endpoint based on the modalId
    var ccendpoint = '/get_data_pumps';
    // Fetch pump data from the server and update the chart
    fetchAndUpdateChart3(ccendpoint);
    
    // Update the chart every second
    setInterval(function() {
        fetchAndUpdateChart3(ccendpoint);
    }, 4000);
}

// Function to fetch pump data from the server and update the chart
function fetchAndUpdateChart3(ccendpoint) {
    fetch(ccendpoint)
        .then(response => {
            if (response.ok) {
                console.log(response)
                return response.json();
            } else {
                throw new Error('Failed to fetch alarm data');
            }
        })
        .then(data => {
            // Check if data contains all required properties
            console.log(data)
            if (data && data.timestamps && data.psip1 && data.psip2 && data.psip3 && data.psip4 && data.psip5) {
                // Update the chart with new data
                initializeChartOutsideModal(data.timestamps, data.psip1, data.psip2, data.psip3, data.psip4, data.psip5);
            } else {
                console.error('Invalid data structure');
            }
        })
        .catch(error => {
            console.error('Error fetching alarm data:', error);
        });
}
    // Function to initialize the chart outside the modal
    function initializeChartOutsideModal(timestamps, psip1, psip2, psip3, psip4, psip5) {
        // Ensure the Chart.js instance is created
        if (!pumptotalChartOutside) {
            var ccctx = document.getElementById('pumptotalChartOutside').getContext('2d');
            pumptotalChartOutside = new Chart(ccctx, {
                type: 'line',
                data: {
                    labels: timestamps.slice(-60), // Display only the last 60 labels initially
                    datasets: [{
                            label: 'Pump 1 psi',
                            data: psip1.slice(-60), // Display only the last 60 data points initially
                            borderColor: 'rgba(255, 200, 132, 1)',
                            borderWidth: 1
                        },{
                            label: 'Pump 2 psi',
                            data: psip2.slice(-60), // Display only the last 60 data points initially
                            borderColor: 'rgba(44, 255, 23, 0.8)',
                            borderWidth: 1
                        },{
                            label: 'Pump 3 psi',
                            data: psip3.slice(-60), // Display only the last 60 data points initially
                            borderColor: 'rgba(23, 219, 255, 0.8)',
                            borderWidth: 1
                        },{
                            label: 'Pump 4 psi',
                            data: psip4.slice(-60), // Display only the last 60 data points initially
                            borderColor: 'rgba(214, 23, 255, 0.8)',
                            borderWidth: 1
                        }, {
                            label: 'Pump 5 psi',
                            data: psip5.slice(-60), // Display only the last 60 data points initially
                            borderColor: 'rgba(255, 0, 0, 0.8)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
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
            pumptotalChartOutside.data.labels = timestamps.slice(-10);
            pumptotalChartOutside.data.datasets[0].data = psip1.slice(-10);
            pumptotalChartOutside.data.datasets[1].data = psip2.slice(-10);
            pumptotalChartOutside.data.datasets[2].data = psip3.slice(-10);
            pumptotalChartOutside.data.datasets[3].data = psip4.slice(-10);
            pumptotalChartOutside.data.datasets[4].data = psip5.slice(-10);
    
            pumptotalChartOutside.update();
        }
    }


    function scrollLeft() {
        // Shift the displayed labels to the left by 10 positions
        var currentLabels = pumptotalChartOutside.data.labels;
        var newLabels = currentLabels.slice(10); // Remove the first 10 labels
        pumptotalChartOutside.data.labels = newLabels;
        
        // Shift the corresponding data points as well
        pumptotalChartOutside.data.datasets.forEach(dataset => {
            dataset.data = dataset.data.slice(10);
        });
    
        pumptotalChartOutside.update(); // Update the chart
    }
    
    // Function to handle click on the right arrow button
    function scrollRight() {
        // Shift the displayed labels to the right by 10 positions
        var currentLabels = pumptotalChartOutside.data.labels;
        var newLabels = currentLabels.slice(-5); // Keep the last 50 labels
        pumptotalChartOutside.data.labels = newLabels;
    
        // Shift the corresponding data points as well
        pumptotalChartOutside.data.datasets.forEach(dataset => {
            dataset.data = dataset.data.slice(-5);
        });
    
        pumptotalChartOutside.update(); // Update the chart
    }
    
    // Add event listeners to the left and right arrow buttons
    document.getElementById('leftArrow').addEventListener('click', scrollLeft);
    document.getElementById('rightArrow').addEventListener('click', scrollRight);









function openplcdata(modalId) {
    var plcmodal = document.getElementById(modalId);
    plcmodal.style.display = "block";
}




//persistent ALL Pump Chart

var pumptotalChart;
var cctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(cctx).Line(lineChartData, {
        responsive: true,
        showTooltips: true,
        multiTooltipTemplate: "<%= value %>",
    });

// Function to open the modal and start updating the chart
function openaveragepumpdata(modalId) {
    var cmodal = document.getElementById(modalId);
    cmodal.style.display = "block";
    
    // Define the endpoint based on the modalId
    var cendpoint = '';
    if (modalId === 'getdatapumps') {
        cendpoint = '/get_data_pumps';
    } else if (modalId === 'pump2data') {
        cendpoint = '/get_pump_2_monitordata';
    } else if (modalId === 'pump3data') {
        cendpoint = '/get_pump_3_monitordata';
    } else if (modalId === 'pump4data') {
        cendpoint = '/get_pump_4_monitordata';
    } else if (modalId === 'pump5data') {
        cendpoint = '/get_pump_5_monitordata';
    }

    // Fetch pump data from the server and update the chart
    fetchAndUpdateChart2(cendpoint);
    
    // Update the chart every second
    setInterval(function() {
        fetchAndUpdateChart2(cendpoint);
    }, 4000);
}

// Function to fetch pump data from the server and update the chart
function fetchAndUpdateChart2(cendpoint) {
    fetch(cendpoint)
        .then(response => {
            if (response.ok) {
                console.log(response)
                return response.json();
            } else {
                throw new Error('Failed to fetch alarm data');
            }
        })
        .then(data => {
            // Check if data contains all required properties
            console.log(data)
            if (data && data.timestamps && data.psip1 && data.psip2 && data.psip3 && data.psip4 && data.psip5) {
                // Update the chart with new data
                updateChart2(data.timestamps, data.psip1, data.psip2, data.psip3, data.psip4, data.psip5);
            } else {
                console.error('Invalid data structure');
            }
        })
        .catch(error => {
            console.error('Error fetching alarm data:', error);
        });
}

function updateChart2(timestamps, psip1, psip2, psip3, psip4, psip5) {
    // Ensure the Chart.js instance is created
    if (!pumptotalChart) {
        var cctx = document.getElementById('pumptotalChart').getContext('2d');
        pumptotalChart = new Chart(cctx, {
            type: 'line',
            data: {
                labels: timestamps,
                datasets: [{
                        label: 'Pump 1 psi',
                        data: psip1,
                        borderColor: 'rgba(255, 200, 132, 1)',
                        borderWidth: 1
                    },{
                        label: 'Pump 2 psi',
                        data: psip2,
                        borderColor: 'rgba(44, 255, 23, 0.8)',
                        borderWidth: 1
                    },{
                        label: 'Pump 3 psi',
                        data: psip3,
                        borderColor: 'rgba(23, 219, 255, 0.8)',
                        borderWidth: 1
                    },{
                        label: 'Pump 4 psi',
                        data: psip4,
                        borderColor: 'rgba(214, 23, 255, 0.8)',
                        borderWidth: 1
                    }, {
                        label: 'Pump 5 psi',
                        data: psip5,
                        borderColor: 'rgba(255, 0, 0, 0.8)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
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
        pumptotalChart.data.labels = timestamps;
        pumptotalChart.data.datasets[0].data = psip1;
        pumptotalChart.data.datasets[1].data = psip2;
        pumptotalChart.data.datasets[2].data = psip3;
        pumptotalChart.data.datasets[3].data = psip4;
        pumptotalChart.data.datasets[4].data = psip5;


        // Remove old data points if exceeding 10 labels
        if (pumptotalChart.data.labels.length > 60) {
            pumptotalChart.data.labels = pumptotalChart.data.labels.slice(-60);
            pumptotalChart.data.datasets.forEach(dataset => {
                dataset.data = dataset.data.slice(-60);
            });
        }

        pumptotalChart.update();
    }
}