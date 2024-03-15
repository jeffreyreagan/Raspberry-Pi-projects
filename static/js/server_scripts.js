$(document).ready(function() {
    $('#togglePump1Button').on('click', function() {
        // Call the server to toggle the pump status
        $.ajax({
            url: '/toggle_pump_1',
            type: 'POST',
            success: function(response) {
                // Update the button text and status display
                if (response.status === 1) {
                    $('#togglePump1Button').text('Turn Off Pump 1');
                    $('#status').text('Pump 1 is On');
                } else {
                    $('#togglePump1Button').text('Turn On Pump 1');
                    $('#status').text('Pump 1 is Off');
                }
            },
            error: function(xhr, status, error) {
                console.error('Error toggling pump:', error);
            }
        });
    });

    $('#togglePump2Button').on('click', function() {
        // Call the server to toggle the pump status
        $.ajax({
            url: '/toggle_pump_2',
            type: 'POST',
            success: function(response) {
                // Update the button text and status display
                if (response.status === 1) {
                    $('#togglePump2Button').text('Turn Off Pump 2');
                    $('#status').text('Pump 2 is On');
                } else {
                    $('#togglePump2Button').text('Turn On Pump 2');
                    $('#status').text('Pump 2 is Off');
                }
            },
            error: function(xhr, status, error) {
                console.error('Error toggling pump:', error);
            }
        });
    });

    $('#togglePump3Button').on('click', function() {
        // Call the server to toggle the pump status
        $.ajax({
            url: '/toggle_pump_3',
            type: 'POST',
            success: function(response) {
                // Update the button text and status display
                if (response.status === 1) {
                    $('#togglePump3Button').text('Turn Off Pump 3');
                    $('#status').text('Pump 3 is On');
                } else {
                    $('#togglePump3Button').text('Turn On Pump 3');
                    $('#status').text('Pump 3 is Off');
                }
            },
            error: function(xhr, status, error) {
                console.error('Error toggling pump 3:', error);
            }
        });
    });

    $('#togglePump4Button').on('click', function() {
        // Call the server to toggle the pump status
        $.ajax({
            url: '/toggle_pump_4',
            type: 'POST',
            success: function(response) {
                // Update the button text and status display
                if (response.status === 1) {
                    $('#togglePump4Button').text('Turn Off Pump 4');
                    $('#status').text('Pump 4 is On');
                } else {
                    $('#togglePump4Button').text('Turn On Pump 4');
                    $('#status').text('Pump 4 is Off');
                }
            },
            error: function(xhr, status, error) {
                console.error('Error toggling pump 4:', error);
            }
        });
    });

    $('#togglePump5Button').on('click', function() {
        // Call the server to toggle the pump status
        $.ajax({
            url: '/toggle_pump_5',
            type: 'POST',
            success: function(response) {
                // Update the button text and status display
                if (response.status === 1) {
                    $('#togglePump5Button').text('Turn Off Pump 5');
                    $('#status').text('Pump 5 is On');
                } else {
                    $('#togglePump5Button').text('Turn On Pump 5');
                    $('#status').text('Pump 5 is Off');
                }
            },
            error: function(xhr, status, error) {
                console.error('Error toggling pump 5:', error);
            }
        });
    });

    
    
  
    // Fetch data initially when the page loads
    
 

    // Update data every second
    
    setInterval(fetchPump2VacuumData, 5000);
    setInterval(checkAnimationStatus, 5000);



});



function fetchPump2VacuumData() {
    $.getJSON('/get_pump2vacuum_data', function(data) {
        $('#pump2vacuum').text(data.pump2vacuum);
        vacuumData[1] = data.pump2vacuum; // Update vacuum data for pump 1 GRAPH
    });
    $.getJSON('/get_VACUUM_2_SEPARATOR_PRESSURE_data', function(data) {
        $('#seperator2_psi').text(data.seperator2_psi);
    });
}

function animateCircle1(angle1) {
    // Calculate the new position of the smaller circle
    const centerX = 160; // x-coordinate of the center of the larger circle
    const centerY = 110; // y-coordinate of the center of the larger circle
    const radius = 15; // radius of the larger circle
    const newX = centerX + radius * Math.cos(angle1);
    const newY = centerY + radius * Math.sin(angle1);
    // Update the position of the smaller circle
    smallerCircle1.setAttribute('cx', newX);
    smallerCircle1.setAttribute('cy', newY);
  }
  function animateCircle2(angle2) {
    // Calculate the new position of the smaller circle
    const centerX = 160; // x-coordinate of the center of the larger circle
    const centerY = 110; // y-coordinate of the center of the larger circle
    const radius = 15; // radius of the larger circle
    const newX = centerX + radius * Math.cos(angle2);
    const newY = centerY + radius * Math.sin(angle2);
    // Update the position of the smaller circle
    smallerCircle2.setAttribute('cx', newX);
    smallerCircle2.setAttribute('cy', newY);
  }
  function animateCircle3(angle3) {
    // Calculate the new position of the smaller circle
    const centerX = 160; // x-coordinate of the center of the larger circle
    const centerY = 110; // y-coordinate of the center of the larger circle
    const radius = 15; // radius of the larger circle
    const newX = centerX + radius * Math.cos(angle3);
    const newY = centerY + radius * Math.sin(angle3);
    // Update the position of the smaller circle
    smallerCircle3.setAttribute('cx', newX);
    smallerCircle3.setAttribute('cy', newY);
  }
  function animateCircle4(angle4) {
    // Calculate the new position of the smaller circle
    const centerX = 160; // x-coordinate of the center of the larger circle
    const centerY = 110; // y-coordinate of the center of the larger circle
    const radius = 15; // radius of the larger circle
    const newX = centerX + radius * Math.cos(angle4);
    const newY = centerY + radius * Math.sin(angle4);
    // Update the position of the smaller circle
    smallerCircle4.setAttribute('cx', newX);
    smallerCircle4.setAttribute('cy', newY);
  }
  function animateCircle5(angle5) {
    // Calculate the new position of the smaller circle
    const centerX = 160; // x-coordinate of the center of the larger circle
    const centerY = 110; // y-coordinate of the center of the larger circle
    const radius = 15; // radius of the larger circle
    const newX = centerX + radius * Math.cos(angle5);
    const newY = centerY + radius * Math.sin(angle5);
    // Update the position of the smaller circle
    smallerCircle5.setAttribute('cx', newX);
    smallerCircle5.setAttribute('cy', newY);
  }
  function startAnimation() {
       
    // Animate the circle  
if (animation_state_p1 == 1) {
    ; // Exit function if animation is already running
 
    console.log("def starting p1 animation")
    let angle1 = 0;
        interval1 = setInterval(() => {
        // Increment angle for animation
            angle1 += 0.05; // Adjust the speed of animation by changing the increment
        // Update circle position
            animateCircle1(angle1);
        }, 50);
        animation_state_p1 = 2;
       // Adjust the interval for smoother animation
}
if (animation_state_p2 == 1) {
     // Exit function if animation is already running
    console.log("def starting p2 animation")
    let angle2 = 0;
        interval2 = setInterval(() => {
        // Increment angle for animation
            angle2 += 0.05; // Adjust the speed of animation by changing the increment
        // Update circle position
            animateCircle2(angle2);
        }, 50);
        animation_state_p2 = 2;
       // Adjust the interval for smoother animation
}
if (animation_state_p3 == 1) {
    ; // Exit function if animation is already running
 
    console.log("def starting p3 animation")
    let angle3 = 0;
        interval3 = setInterval(() => {
        // Increment angle for animation
            angle3 += 0.05; // Adjust the speed of animation by changing the increment
        // Update circle position
            animateCircle3(angle3);
        }, 50);
        animation_state_p3 = 2;
       // Adjust the interval for smoother animation
}
if (animation_state_p4 == 1) {
     // Exit function if animation is already running
    console.log("def starting p4 animation")
    let angle4 = 0;
        interval4 = setInterval(() => {
        // Increment angle for animation
            angle4 += 0.05; // Adjust the speed of animation by changing the increment
        // Update circle position
            animateCircle4(angle4);
        }, 50);
        animation_state_p4 = 2;
       // Adjust the interval for smoother animation
}
if (animation_state_p5 == 1) {
     // Exit function if animation is already running
    console.log("def starting p5 animation")
    let angle5 = 0;
        interval5 = setInterval(() => {
        // Increment angle for animation
            angle5 += 0.05; // Adjust the speed of animation by changing the increment
        // Update circle position
            animateCircle5(angle5);
        }, 50);
        animation_state_p5 = 2;
      // Adjust the interval for smoother animation
}
}
// Function to stop the animation
function stopAnimation() {
console.log("animation states before stopping, should be 0 for pump called to stop:",animation_state_p1,animation_state_p2,animation_state_p3,animation_state_p4,animation_state_p5)
if (animation_state_p1 == 0){;    
    clearInterval(interval1);
    console.log("stopping animation 1")
    }
if (animation_state_p2 == 0){;
    clearInterval(interval2)
    console.log("stopping animation 2")
    } // Stop the animation interval
if (animation_state_p3 == 0){;    
    clearInterval(interval3);
    console.log("stopping animation 3")
    }
if (animation_state_p4 == 0){;
    clearInterval(interval4)
    console.log("stopping animation 4")
    }
if (animation_state_p5 == 0){;
    clearInterval(interval5)
    console.log("stopping animation 5")
    }
}
function isAnimationRunning() {
    return animation_state_p1 !== 2, animation_state_p2 !== 2, animation_state_p3 !== 2, animation_state_p4 !== 2, animation_state_p5 !== 2;
}
// Function to check the animation status
function checkAnimationStatus() {
    fetch('/check_animation_status') // Fetch the animation status from the server
        .then(response => response.json())
        .then(data => {
            const animationstatuses = data[0];
            console.log(animationstatuses);
            const pump_1_status_value = data[2];
            console.log(data[2]);
            const pump_2_status_value = data[3];
            console.log(data[3]);
            const pump_1_alarm_descriptions = data[7];
            console.log(data[7]);
            const pump_3_status_value = data[4];
            const pump_4_status_value = data[5];
            const pump_5_status_value = data[6];
            const pump_2_alarm_descriptions = data[8];
            const pump_3_alarm_descriptions = data[9];
            const pump_4_alarm_descriptions = data[10];
            const pump_5_alarm_descriptions = data[11];
            $('#pump1alarmstatus').text(pump_1_status_value);
            $('#pump1_active_alarms').text(pump_1_alarm_descriptions);
            $('#pump3alarmstatus').text(pump_3_status_value);
            $('#pump4alarmstatus').text(pump_4_status_value);
            $('#pump5alarmstatus').text(pump_5_status_value);
            console.log(data[3]);
            $('#pump2alarmstatus').text(pump_2_status_value);
            $('#pump2_active_alarms').text(pump_2_alarm_descriptions);
            $('#pump3_active_alarms').text(pump_3_alarm_descriptions);
            $('#pump4_active_alarms').text(pump_4_alarm_descriptions);
            $('#pump5_active_alarms').text(pump_5_alarm_descriptions);
            // Log the response data (for debugging)
            if (animationstatuses[0].status === 'Animation 1 started' && animation_state_p1 !== 2) {
                console.log("trying to start animation p_1");
                animation_state_p1 = 1;
                startAnimation(); // Start the animation if it's not already running
            } 
            if (animationstatuses[0].status === 'Animation 1 stopped') {
                animation_state_p1 = 0;
                stopAnimation(); // Stop the animation if it's running
            } 
            if (animationstatuses[1].status === 'Animation 2 started' && animation_state_p2 !== 2) {
                console.log("trying to start animation p_2");
                animation_state_p2 = 1;
                startAnimation();
            } 
            if (animationstatuses[1].status === 'Animation 2 stopped') {
                console.log("trying to stop animation p_2");
                animation_state_p2 = 0;
                stopAnimation();
            }
            if (animationstatuses[2].status === 'Animation 3 started' && animation_state_p3 !== 2) {
                console.log("trying to start animation p_3");
                animation_state_p3 = 1;
                startAnimation(); // Start the animation if it's not already running
            } 
            if (animationstatuses[2].status === 'Animation 3 stopped') {
                animation_state_p3 = 0;
                stopAnimation(); // Stop the animation if it's running
            } 
            if (animationstatuses[3].status === 'Animation 4 started' && animation_state_p4 !== 2) {
                console.log("trying to start animation p_4");
                animation_state_p4 = 1;
                startAnimation();
            } 
            if (animationstatuses[3].status === 'Animation 4 stopped') {
                console.log("trying to stop animation p_4");
                animation_state_p4 = 0;
                stopAnimation();
            } 
            if (animationstatuses[4].status === 'Animation 5 started' && animation_state_p5 !== 2) {
                console.log("trying to start animation p_5");
                animation_state_p5 = 1;
                startAnimation();
            } 
            if (animationstatuses[4].status === 'Animation 5 stopped') {
                console.log("should be stopping p5 animation");
                animation_state_p5 = 0;
                stopAnimation();
            }
            return data[1];
        })
        .then(circle_colors => {
            console.log(circle_colors);
        
            // Set the fill attribute of each pump status element based on the pump colors
            document.getElementById('pump1status').setAttribute('fill', circle_colors.pump1color);
            document.getElementById('pump2status').setAttribute('fill', circle_colors.pump2color);
            document.getElementById('pump3status').setAttribute('fill', circle_colors.pump3color);
            document.getElementById('pump4status').setAttribute('fill', circle_colors.pump4color);
            document.getElementById('pump5status').setAttribute('fill', circle_colors.pump5color);
        })
        .catch(error => {
            console.error('Error updating circle color or animation state:', error);
        });
}

//initial calling

fetchPump2VacuumData();
checkAnimationStatus();









const smallerCircle1 = document.getElementById('pump1status');
const smallerCircle2 = document.getElementById('pump2status');
const smallerCircle3 = document.getElementById('pump3status');
const smallerCircle4 = document.getElementById('pump4status');
const smallerCircle5 = document.getElementById('pump5status');
let interval1;
let interval2;
let interval3;
let interval4;
let interval5;
// Function to animate the circle around the larger circle

// Example: Trigger the animation based on a boolean condition
animation_state_p1 = [];
animation_state_p2 = [];
animation_state_p3 = [];
animation_state_p4 = [];
animation_state_p5 = [];













let vacuumData = []; // Array to store vacuum data from each pump
let chart; // Variable to store the Chart.js chart instance

// Function to calculate the average vacuum
function calculateAverage() {
    let sum = 0;
    vacuumData.forEach((vacuum) => {
        sum += vacuum;
    });
    return sum ;
}

// Function to fetch data from your JavaScript variables (replace with your own data retrieval method)
function fetchPumpVacuumData() {
    // Fetch vacuum data for pump 1
    $.getJSON('/get_pump1vacuum_data', function(data) {
        vacuumData[0] = data.pump1vacuum; // Update vacuum data for pump 1
    

    $('#pump1vacuum').text(data.pump1vacuum);
    });

    $.getJSON('/get_VACUUM_1_SEPARATOR_PRESSURE_data', function(data) {
        $('#seperator1_psi').text(data.seperator1_psi);
    });
    // Fetch vacuum data for pump 2
    $.getJSON('/get_pump2vacuum_data', function(data) {
        vacuumData[1] = data.pump2vacuum; // Update vacuum data for pump 1
    

    $('#pump2vacuum').text(data.pump2vacuum);
    });

    $.getJSON('/get_VACUUM_2_SEPARATOR_PRESSURE_data', function(data) {
        $('#seperator2_psi').text(data.seperator2_psi);
    });

    $.getJSON('/get_pump3vacuum_data', function(data) {
        vacuumData[2] = data.pump3vacuum; // Update vacuum data for pump 1
    

    $('#pump3vacuum').text(data.pump3vacuum);
    });

    $.getJSON('/get_VACUUM_3_SEPARATOR_PRESSURE_data', function(data) {
        $('#seperator3_psi').text(data.seperator3_psi);
    });

    $.getJSON('/get_pump4vacuum_data', function(data) {
        vacuumData[3] = data.pump4vacuum; // Update vacuum data for pump 1
    

    $('#pump4vacuum').text(data.pump4vacuum);
    });

    $.getJSON('/get_VACUUM_4_SEPARATOR_PRESSURE_data', function(data) {
        $('#seperator4_psi').text(data.seperator4_psi);
    });

    $.getJSON('/get_pump5vacuum_data', function(data) {
        vacuumData[4] = data.pump5vacuum; // Update vacuum data for pump 1
    

    $('#pump5vacuum').text(data.pump5vacuum);
    });

    $.getJSON('/get_VACUUM_5_SEPARATOR_PRESSURE_data', function(data) {
        $('#seperator5_psi').text(data.seperator5_psi);
    });
}
fetchPumpVacuumData();

function fetchGraphDataFromServer() {
    return fetch('/get_graph_data')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch graph data');
            }
        })
        .then(data => {
            // Filter data to get only the entries within the last half-hour
            const currentTime = new Date();
            const halfHourAgo = new Date(currentTime.getTime() - 30 * 60 * 1000); // Half hour ago
            const filteredData = data.filter(entry => new Date(entry.timestamp) >= halfHourAgo);

            return filteredData; // Return the filtered data
        })
        .catch(error => {
            console.error('Error fetching graph data:', error);
            throw error; // Re-throw the error to propagate it further
        });
}


// Function to render or update the chart
function renderChart() {
    // Update the Chart.js chart with the average vacuum value
    if (chart) {
        chart.data.labels.push(new Date().toLocaleTimeString()); // Add current time as label
        chart.data.datasets[0].data.push(calculateAverage()); // Add average vacuum as data point

        // Remove old data points if exceeding 30 minutes (1800 seconds)
        if (chart.data.labels.length > 360) {
            chart.data.labels.shift(); // Remove the first label
            chart.data.datasets[0].data.shift(); // Remove the first data point
        }

        chart.update(); // Update the chart
    } else {
        // Create the Chart.js chart
        console.log('Creating new chart');
        chart = new Chart('liveGraph', {
            type: 'line',
            data: {
                labels: [], // Labels for x-axis (time)
                datasets: [
                    {
                        label: 'Average Vacuum',
                        data: [], // Data points for average vacuum
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }
                ]
            },
            options: {
                // Chart options (e.g., scales, tooltips, etc.)
                // See Chart.js documentation for available options
            }
        });
    }
}

// Function to continuously update data and render the chart
function saveGraphDataToServer(data) {
    const currentTime = new Date().toLocaleTimeString(); // Get current time

    // Calculate average of the data
    const average = calculateAverage();

    // Create an object with timestamp and average data
    const graphData = {
        timestamp: currentTime,
        data: average
    };

    fetch('/save_graph_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(graphData) // Send timestamp along with average data
    })
    .then(response => {
        if (response.ok) {
            console.log('Graph data saved successfully');
        } else {
            console.error('Failed to save graph data:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error saving graph data:', error);
    });
}

function updateDataAndRenderChart() {
    fetchPumpVacuumData(); // Fetch current vacuum data
    fetchGraphDataFromServer(); // Fetch graph data from the server
    setTimeout(() => {
        renderChart(); // Render or update the chart
        saveGraphDataToServer(vacuumData); // Send updated graph data to the server
    }, 1000); // Wait for 1 second before rendering the chart
    setTimeout(updateDataAndRenderChart, 5000); // Update every 5 seconds (adjust as needed)
}



// Initial call to start updating data and rendering the chart
setTimeout(updateDataAndRenderChart, 1000);

function openAlarmHistory(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";

    // Fetch alarm data from the server
    fetch('/get_pump_1_alarm_history')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch alarm data');
            }
        })
        .then(data => {
            // Update the content of the pump1alarmtimestamps <p> element with the fetched data
            var pump1alarmtimestamps = document.getElementById("pump1alarmtimestamps");
            pump1alarmtimestamps.textContent = JSON.stringify(data);
        })
        .catch(error => {
            console.error('Error fetching alarm data:', error);
        });
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
