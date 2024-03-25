$(document).ready(function() {
    $('#togglePump1Button').on('click', function() {
        // Call the server to toggle pump 1 status
        $.ajax({
            url: '/toggle_pump_1',
            type: 'POST',
            success: function(response) {
                // Update the button text and status display
                if (response.status === 1) {
                    $('#togglePump1Button').text('Turn Off Pump 1');
                    $('#status').text('Pump 1 is On');
                    openpump1valve()
                } else {
                    $('#togglePump1Button').text('Turn On Pump 1');
                    $('#status').text('Pump 1 is Off');
                    closepump1valve()
                }
            },
            error: function(xhr, status, error) {
                console.error('Error toggling pump:', error);
            }
        });
    });

    $('#togglePump2Button').on('click', function() {
        // Call the server to toggle pump 2 status
        $.ajax({
            url: '/toggle_pump_2',
            type: 'POST',
            success: function(response) {
                // Update the button text and status display
                if (response.status === 1) {
                    $('#togglePump2Button').text('Turn Off Pump 2');
                    $('#status').text('Pump 2 is On');
                    openpump2valve()
                } else {
                    $('#togglePump2Button').text('Turn On Pump 2');
                    $('#status').text('Pump 2 is Off');
                    closepump2valve()
                }
            },
            error: function(xhr, status, error) {
                console.error('Error toggling pump:', error);
            }
        });
    });

    $('#togglePump3Button').on('click', function() {
        // Call the server to toggle pump 3 status
        $.ajax({
            url: '/toggle_pump_3',
            type: 'POST',
            success: function(response) {
                // Update the button text and status display
                if (response.status === 1) {
                    $('#togglePump3Button').text('Turn Off Pump 3');
                    $('#status').text('Pump 3 is On');
                    openpump3valve()
                } else {
                    $('#togglePump3Button').text('Turn On Pump 3');
                    $('#status').text('Pump 3 is Off');
                    closepump3valve()
                }
            },
            error: function(xhr, status, error) {
                console.error('Error toggling pump 3:', error);
            }
        });
    });

    $('#togglePump4Button').on('click', function() {
        // Call the server to toggle pump 4 status
        $.ajax({
            url: '/toggle_pump_4',
            type: 'POST',
            success: function(response) {
                // Update the button text and status display
                if (response.status === 1) {
                    $('#togglePump4Button').text('Turn Off Pump 4');
                    $('#status').text('Pump 4 is On');
                    openpump4valve()
                } else {
                    $('#togglePump4Button').text('Turn On Pump 4');
                    $('#status').text('Pump 4 is Off');
                    closepump4valve()
                }
            },
            error: function(xhr, status, error) {
                console.error('Error toggling pump 4:', error);
            }
        });
    });

    $('#togglePump5Button').on('click', function() {
        // Call the server to toggle pump 5 status
        $.ajax({
            url: '/toggle_pump_5',
            type: 'POST',
            success: function(response) {
                // Update the button text and status display
                if (response.status === 1) {
                    $('#togglePump5Button').text('Turn Off Pump 5');
                    $('#status').text('Pump 5 is On');
                    openpump5valve()
                } else {
                    $('#togglePump5Button').text('Turn On Pump 5');
                    $('#status').text('Pump 5 is Off');
                    closepump5valve()
                }
            },
            error: function(xhr, status, error) {
                console.error('Error toggling pump 5:', error);
            }
        });
    });

    setInterval(checkAnimationStatus, 2000);
    function updatepump1setdisplay() {
        $.ajax({
            url: '/updatepump1setdisplay',
            method: 'GET',
            success: function(response) {
                var setpointValue = response.pump1set !== null ? response.pump1set : 0;
                var setpointText = 'Pump 1 setpoint: ' + setpointValue + ' psi';
                $('#setpoint1display').text(setpointText);
            }
        });
    }

    // Update variable every 5 seconds
    setInterval(updatepump1setdisplay, 2000);

    // Initial update
    updatepump1setdisplay();


});

function simulatealarms() {
    fetch('/simulate_alarms');
    

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
     ;// Exit function if animation is already running

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
     ;// Exit function if animation is already running

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
if (animation_state_p1 == 0){;    
    clearInterval(interval1);

    
    }
if (animation_state_p2 == 0){;
    clearInterval(interval2)

    } // Stop the animation interval
if (animation_state_p3 == 0){;    
    clearInterval(interval3);

    }
if (animation_state_p4 == 0){;
    clearInterval(interval4)
   
    }
if (animation_state_p5 == 0){;
    clearInterval(interval5)
    
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
            
            const pump_2_status_value = data[3];
        
            const pump_1_alarm_descriptions = data[7];
           
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
          
            $('#pump2alarmstatus').text(pump_2_status_value);
            $('#pump2_active_alarms').text(pump_2_alarm_descriptions);
            $('#pump3_active_alarms').text(pump_3_alarm_descriptions);
            $('#pump4_active_alarms').text(pump_4_alarm_descriptions);
            $('#pump5_active_alarms').text(pump_5_alarm_descriptions);
            // Log the response data (for debugging)
            if (animationstatuses[0].status === 'Animation 1 started' && animation_state_p1 !== 2) {
              
                animation_state_p1 = 1;
                startAnimation();
                openpump1valve(); // Start the animation if it's not already running
            } 
            if (animationstatuses[0].status === 'Animation 1 stopped') {
                animation_state_p1 = 0;
                stopAnimation();
                closepump1valve(); // Stop the animation if it's running
            } 
            if (animationstatuses[1].status === 'Animation 2 started' && animation_state_p2 !== 2) {
                
                animation_state_p2 = 1;
                startAnimation();
                openpump2valve(); // Start the animation if it's not already running
            } 
            if (animationstatuses[1].status === 'Animation 2 stopped') {
              
                animation_state_p2 = 0;
                stopAnimation();
                closepump2valve(); // Stop the animation if it's running
            }
            if (animationstatuses[2].status === 'Animation 3 started' && animation_state_p3 !== 2) {
               
                animation_state_p3 = 1;
                startAnimation(); // Start the animation if it's not already running
                openpump3valve();
            } 
            if (animationstatuses[2].status === 'Animation 3 stopped') {
                animation_state_p3 = 0;
                stopAnimation(); // Stop the animation if it's running
                closepump3valve();
            } 
            if (animationstatuses[3].status === 'Animation 4 started' && animation_state_p4 !== 2) {
             
                animation_state_p4 = 1;
                startAnimation();
                openpump4valve();
            } 
            if (animationstatuses[3].status === 'Animation 4 stopped') {
                
                animation_state_p4 = 0;
                stopAnimation();
                closepump4valve();
            } 
            if (animationstatuses[4].status === 'Animation 5 started' && animation_state_p5 !== 2) {
                
                animation_state_p5 = 1;
                startAnimation();
                openpump5valve();
            } 
            if (animationstatuses[4].status === 'Animation 5 stopped') {
              
                animation_state_p5 = 0;
                stopAnimation();
                closepump5valve();
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





// Function to fetch data from JavaScript variables to label html elements
function fetchPumpVacuumData() {
    // Fetch vacuum data for pump 1
    $.getJSON('/get_pump1vacuum_data', function(data) {
        vacuumData[0] = data.pump1vacuum; // Update vacuum chart data for pump 1

    $('#pump1vacuum').text(data.pump1vacuum);
    });

    $.getJSON('/get_VACUUM_1_SEPARATOR_PRESSURE_data', function(data) {
        $('#seperator1_psi').text(data.seperator1_psi);
    });
    // Fetch vacuum data for pump 2
    $.getJSON('/get_pump2vacuum_data', function(data) {
        vacuumData[1] = data.pump2vacuum; // Update vacuum chart data for pump 2
    
    $('#pump2vacuum').text(data.pump2vacuum);
    });

    $.getJSON('/get_VACUUM_2_SEPARATOR_PRESSURE_data', function(data) {
        $('#seperator2_psi').text(data.seperator2_psi);
    });

    $.getJSON('/get_pump3vacuum_data', function(data) {
        vacuumData[2] = data.pump3vacuum; // Update vacuum chart data for pump 3
    
    $('#pump3vacuum').text(data.pump3vacuum);
    });

    $.getJSON('/get_VACUUM_3_SEPARATOR_PRESSURE_data', function(data) {
        $('#seperator3_psi').text(data.seperator3_psi);
    });

    $.getJSON('/get_pump4vacuum_data', function(data) {
        vacuumData[3] = data.pump4vacuum; // Update vacuum chart data for pump 4

    $('#pump4vacuum').text(data.pump4vacuum);
    });

    $.getJSON('/get_VACUUM_4_SEPARATOR_PRESSURE_data', function(data) {
        $('#seperator4_psi').text(data.seperator4_psi);
    });

    $.getJSON('/get_pump5vacuum_data', function(data) {
        vacuumData[4] = data.pump5vacuum; // Update vacuum chart data for pump 5

    $('#pump5vacuum').text(data.pump5vacuum);
    });

    $.getJSON('/get_VACUUM_5_SEPARATOR_PRESSURE_data', function(data) {
        $('#seperator5_psi').text(data.seperator5_psi);
    });
}
fetchPumpVacuumData();

function closepump1valve() {
        var rect = document.getElementById('pump1valve');
        var currentY = parseFloat(rect.getAttribute('y'));
        var newY = 80;
        rect.setAttribute('y', newY + 'px');
        
        var rect2 = document.getElementById('pump1valvestem');
        var currentY2 = parseFloat(rect2.getAttribute('y'));
        var newY2 = 84;
        rect2.setAttribute('y', newY2 + 'px');
    }
    
function openpump1valve() {
    var rect = document.getElementById('pump1valve');
    var currentY = parseFloat(rect.getAttribute('y'));
    var newY = 100;
    rect.setAttribute('y', newY + 'px');
    
    var rect2 = document.getElementById('pump1valvestem');
    var currentY2 = parseFloat(rect2.getAttribute('y'));
    var newY2 = 104;
    rect2.setAttribute('y', newY2 + 'px');
    
}
let currentIndexx = -10;
window.addEventListener('beforeunload', function(event) {
     //Clear local storage when the browser is closed or refreshed
    localStorage.clear();
});
window.onload = function() {
    
    var newY = localStorage.getItem('pump1valveY');
    setTimeout(openaveragepumpdata_outside(),5000);
    if (newY !== null) {
        document.getElementById('pump1valve').setAttribute('y', newY + 'px');
    }

    var newY2 = localStorage.getItem('pump1valvestemY');
    if (newY2 !== null) {
        document.getElementById('pump1valvestem').setAttribute('y', newY2 + 'px');
    }

    var newY3 = localStorage.getItem('pump2valveY');
    if (newY3 !== null) {
        document.getElementById('pump2valve').setAttribute('y', newY3 + 'px');
    }

    var newY4 = localStorage.getItem('pump2valvestemY');
    if (newY4 !== null) {
        document.getElementById('pump2valvestem').setAttribute('y', newY4 + 'px');
    }

    var newY5 = localStorage.getItem('pump3valveY');
    if (newY5 !== null) {
        document.getElementById('pump3valve').setAttribute('y', newY5 + 'px');
    }

    var newY6 = localStorage.getItem('pump3valvestemY');
    if (newY6 !== null) {
        document.getElementById('pump3valvestem').setAttribute('y', newY6 + 'px');
    }

    var newY7 = localStorage.getItem('pump4valveY');
    if (newY7 !== null) {
        document.getElementById('pump4valve').setAttribute('y', newY7 + 'px');
    }

    var newY8 = localStorage.getItem('pump4valvestemY');
    if (newY8 !== null) {
        document.getElementById('pump4valvestem').setAttribute('y', newY8 + 'px');
    }

    var newY9 = localStorage.getItem('pump5valveY');
    if (newY9 !== null) {
        document.getElementById('pump5valve').setAttribute('y', newY9 + 'px');
    }

    var newY10 = localStorage.getItem('pump5valvestemY');
    if (newY10 !== null) {
        document.getElementById('pump5valvestem').setAttribute('y', newY10 + 'px');
    }

    document.getElementById('initialwindmill').style.display = 'block';
    // Hide other shapes
    document.getElementById('windmill2').style.display = 'none';
    document.getElementById('windmill3').style.display = 'none';
    document.getElementById('windmill4').style.display = 'none';
    startAnimationsvg();
     // Adjust the interval as needed

    // Call animateSVG immediately to start the animation
    
}

let animationInterval;


function startAnimationsvg() {
    animationInterval = setInterval(animateSVG, 1000); // Adjust interval as needed
}

function stopAnimationsvg() {
    clearInterval(animationInterval);
}

function animateSVG() {
    // Show the first shape
    document.getElementById('initialwindmill').style.display = 'block';
    // Hide other shapes
    document.getElementById('windmill2').style.display = 'none';
    document.getElementById('windmill3').style.display = 'none';
    document.getElementById('windmill4').style.display = 'none';

    // Transition to the second shape after a shorter delay
    setTimeout(() => {
        document.getElementById('windmill2').style.display = 'block';
        document.getElementById('initialwindmill').style.display = 'none';
    }, 250); // Adjust the delay as needed

    // Transition to the third shape after a shorter delay
    setTimeout(() => {
        document.getElementById('windmill3').style.display = 'block';
        document.getElementById('windmill2').style.display = 'none';
    }, 500); // Adjust the delay as needed

    // Transition to the fourth shape after a shorter delay
    setTimeout(() => {
        document.getElementById('windmill4').style.display = 'block';
        document.getElementById('windmill3').style.display = 'none';
    }, 750); // Adjust the delay as needed
}




function closepump2valve() {
    var rect = document.getElementById('pump2valve');
    // Get the current y position
    var currentY = parseFloat(rect.getAttribute('y'));
    // Move the rect element up by 20 pixels
    var newY3 = 80;
    // Set the new y position
    rect.setAttribute('y', newY3 + 'px');
    


    var rect2 = document.getElementById('pump2valvestem');
    var currentY2 = parseFloat(rect2.getAttribute('y'));
    var newY4 = 84;
    rect2.setAttribute('y', newY4 + 'px');
   
}
function openpump2valve() {
    var rect = document.getElementById('pump2valve');
    var currentY = parseFloat(rect.getAttribute('y'));
    var newY3 = 100;
    rect.setAttribute('y', newY3 + 'px');
    

    var rect2 = document.getElementById('pump2valvestem');
    var currentY2 = parseFloat(rect2.getAttribute('y'));
    var newY4 = 104;
    rect2.setAttribute('y', newY4 + 'px');
   
}

function closepump3valve() {
    var rect = document.getElementById('pump3valve');
    // Get the current y position
    var currentY = parseFloat(rect.getAttribute('y'));
    // Move the rect element up by 20 pixels
    var newY = 80;
    // Set the new y position
    rect.setAttribute('y', newY + 'px');
   

    var rect2 = document.getElementById('pump3valvestem');
    var currentY2 = parseFloat(rect2.getAttribute('y'));
    var newY6 = 84;
    rect2.setAttribute('y', newY6 + 'px');
    
}
function openpump3valve() {
    var rect = document.getElementById('pump3valve');
    var currentY = parseFloat(rect.getAttribute('y'));
    var newY5 = 100;
    rect.setAttribute('y', newY5 + 'px');
    

    var rect2 = document.getElementById('pump3valvestem');
    var currentY2 = parseFloat(rect2.getAttribute('y'));
    var newY6 = 104;
    rect2.setAttribute('y', newY6 + 'px');
   
}

function closepump4valve() {
    var rect = document.getElementById('pump4valve');
    var currentY = parseFloat(rect.getAttribute('y'));
    var newY = 80;
    // Set the new y position
    rect.setAttribute('y', newY + 'px');

    var rect2 = document.getElementById('pump4valvestem');
    var currentY2 = parseFloat(rect2.getAttribute('y'));
    var newY8 = 84;
    rect2.setAttribute('y', newY8 + 'px');
    
}
function openpump4valve() {
    var rect = document.getElementById('pump4valve');
    var currentY = parseFloat(rect.getAttribute('y'));
    var newY7 = 100;
    rect.setAttribute('y', newY7 + 'px');
    

    var rect2 = document.getElementById('pump4valvestem');
    var currentY2 = parseFloat(rect2.getAttribute('y'));
    var newY8 = 104;
    rect2.setAttribute('y', newY8 + 'px');
    localStorage.setItem('pump4valvestemY', newY8);
}
function closepump5valve() {
    var rect = document.getElementById('pump5valve');
    // Get the current y position
    var currentY = parseFloat(rect.getAttribute('y'));
    // Move the rect element up by 20 pixels
    var newY = 80;
    // Set the new y position
    rect.setAttribute('y', newY + 'px');
   

    var rect2 = document.getElementById('pump5valvestem');
    var currentY2 = parseFloat(rect2.getAttribute('y'));
    var newY10 = 84;
    rect2.setAttribute('y', newY10 + 'px');
    
}
function openpump5valve() {
    var rect = document.getElementById('pump5valve');
    var currentY = parseFloat(rect.getAttribute('y'));
    var newY9 = 100;
    rect.setAttribute('y', newY9 + 'px');
    

    var rect2 = document.getElementById('pump5valvestem');
    var currentY2 = parseFloat(rect2.getAttribute('y'));
    var newY10 = 104;
    rect2.setAttribute('y', newY10 + 'px');
  
}






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


//function fetchGraphDataFromServer() {
  //  return fetch('/get_graph_data')
    //    .then(response => {
      //      if (response.ok) {
        //        return response.json();
          //  } else {
            //    throw new Error('Failed to fetch graph data');
            //}
        //})
        //.then(data => {
            // Filter data to get only the entries within the last half-hour
         //   const currentTime = new Date();
          //  const halfHourAgo = new Date(currentTime.getTime() - 30 * 60 * 1000); // Half hour ago
           // const filteredData = data.filter(entry => new Date(entry.timestamp) >= halfHourAgo);

            //return filteredData; // Return the filtered data
   //     })
     //   .catch(error => {
       //     console.error('Error fetching graph data:', error);
         //   throw error; // Re-throw the error to propagate it further
       // });
//}




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
                        label: 'Process Vacuum',
                        data: [], // Data points for average vacuum
                        fill: false,
                        borderColor: 'rgb(255, 0, 0)',
                        tension: 0.1
                    }
                ]
            },
            options: {
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 20,
                        bottom: 10
                    }
                },
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'psi' // Label for y-axis
                        }
                    }
                },
                legend: {
                    labels: {
                        fontSize: 16,
                        font: {size:16} // Adjust the font size of the dataset label
                    }
                },
                plugins: {
                    title: {
                      display: true,
                      text: 'Total Process Vacuum',
                      font: {size: 25} // Adjust the font size of the chart title
                    },
                    tooltip: {
                        enabled: true,
                    }
                },
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
     // Fetch graph data from the server
    setTimeout(() => {
        renderChart(); // Render or update the chart
        saveGraphDataToServer(vacuumData); // Send updated graph data to the server
    }, 1000); // Wait for 1 second before rendering the chart
    setTimeout(updateDataAndRenderChart, 5000); // Update every 5 seconds (adjust as needed)
}

// Initial call to start updating data and rendering the chart. Had to add timeout for errors.
setTimeout(updateDataAndRenderChart, 1000);

function openAlarmHistory(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    
    // Define the endpoint based on the modalId
    var endpoint = '';
    if (modalId === 'pump1alarm') {
        endpoint = '/get_pump_1_alarm_history';
    } else if (modalId === 'pump2alarm') {
        endpoint = '/get_pump_2_alarm_history';
    } else if (modalId === 'pump3alarm') {
        endpoint = '/get_pump_3_alarm_history';
    } else if (modalId === 'pump4alarm') {
        endpoint = '/get_pump_4_alarm_history';
    } else if (modalId === 'pump5alarm') {
        endpoint = '/get_pump_5_alarm_history';
    }

    // Add more conditions for other modals if needed

    // Fetch alarm data from the server
    fetch(endpoint)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch alarm data');
            }
        })
        .then(data => {
            // Check if data contains timestamps and descriptions
            if (data && data.timestamps && data.descriptions) {
                // Construct the content string
                var content = "";
                for (var i = 0; i < data.timestamps.length; i++) {
                    content += data.timestamps[i] + ": " + data.descriptions[i] + "<br>";
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

function raisepallethoist() {
    var pallethoist = document.getElementById('pallethoist');
    
    
    pallethoist.classList.add('lowerpallethoist');
    
}
function grabfirstpallet() {
    var pallethoist = document.getElementById('pallethoist');
    var firstpallet = document.getElementById('firstpallet');
    ;
    pallethoist.classList.add('grabfirstpallet');
    firstpallet.classList.add('palletgettingrabbed');
}
function carriagetakespallet() {
    var pallethoist = document.getElementById('pallethoist');
    var firstpallet = document.getElementById('firstpallet');
    var carriage = document.getElementById('carriage');
    
    firstpallet.classList.add('carriagetakespallet');
    carriage.classList.add('carriagetakingpallet');
}
function mainhoistgetpallet() {
    var firstpallet = document.getElementById('firstpallet');
    var carriage = document.getElementById('carriage');
    var mainhoist = document.getElementById('mainhoist');
    mainhoist.classList.add('mainhoistgetpallet');
}
function carriageretract() {
    var carriage = document.getElementById('carriage');
    carriage.classList.add('carriageretract');
}
function mainhoistraisingpallet() {
    var mainhoist = document.getElementById('mainhoist');
    var firstpallet = document.getElementById('firstpallet');
    firstpallet.classList.add('palletraisingwithhoist');
    mainhoist.classList.add('mainhoistraisingpallet');
}
function firstsweep() {
    var sweep = document.getElementById('sweep');
    var firstlayer = document.getElementById('first_layer');
    sweep.classList.add('firstlayersweep');
    firstlayer.classList.add('firstlayersweep');
}
function hoistdowntosecondlayer() {
    var mainhoist = document.getElementById('mainhoist')
    var firstlayer = document.getElementById('first_layer')
    var firstpallet = document.getElementById('firstpallet')
    mainhoist.classList.add('hoistdowntosecondlayer')
    firstlayer.classList.add('firstlayerdown1')
    firstpallet.classList.add('palletlowerdown1')
}
function conveyormovement() {
    document.getElementById('second_layer').classList.add('conveyormovement')
    document.getElementById('third_layer').classList.add('conveyormovement')
    document.getElementById('fourth_layer').classList.add('conveyormovement')
    document.getElementById('sweep').classList.add('sweepadjustment1')
}
function lowersheetarms(){
    cuparm1 = document.getElementById('cuparm1');
    cup1 = document.getElementById('cup1');
    cup2 = document.getElementById('cup2');
    cuparm1.classList.add('lowersheetarms')
    cuparm1.setAttribute('height', '50px');
    cuparm2 = document.getElementById('cuparm2');
    cuparm2.classList.add('lowersheetarms')
    cuparm2.setAttribute('height', '50px');
    cup1.classList.add('lowercups')
    cup2.classList.add('lowercups')
}
function pickupsheet() {
    document.getElementById('cuparm1').classList.add('raisesheetarms')
    document.getElementById('cuparm2').classList.add('raisesheetarms')
    document.getElementById('cup1').classList.add('pickupsheet')
    document.getElementById('cup2').classList.add('pickupsheet')
    document.getElementById('sheet').classList.add('sheetpickedup')
    cuparm1.setAttribute('height', '10px');
    cuparm2.setAttribute('height', '10px');

}

function carriagetoplacesheet() {
    carriage = document.getElementById('sweep')
    carriage.classList.remove('sweepadjustment1')
    carriage.classList.remove('conveyormovement')
    carriage.classList.add('carriagetoplacesheet')
    document.getElementById('sheet').classList.add('sheetplacedonfirstlayer')
}
function carriagesheetdroplayer1() {
    cuparm1 = document.getElementById('cuparm1');
    cuparm2 = document.getElementById('cuparm2');
    cuparm1.classList.add('lowersheetarms')
    cuparm2.classList.add('lowersheetarms')
    cup1 = document.getElementById('cup1');
    cup2 = document.getElementById('cup2');
    cup1.classList.add('lowercupsoverpallet')
    cup2.classList.add('lowercupsoverpallet')
    cuparm1.setAttribute('height', '45px');
    cuparm2.setAttribute('height', '45px');
    sheet = document.getElementById('sheet')
    sheet.classList.remove('sheetpickedup','sheetplacedonfirstlayer')
    sheet.classList.add('sheetdroppedlayer1')
}
function raisecupsandarms() {
    cuparm1 = document.getElementById('cuparm1');
    cuparm2 = document.getElementById('cuparm2');
    cuparm1.classList.add('raisesheetarms')
    cuparm2.classList.add('raisesheetarms')
    cuparm1.setAttribute('height', '10px');
    cuparm2.setAttribute('height', '10px');
    cup1 = document.getElementById('cup1');
    cup2 = document.getElementById('cup2');
    cup1.classList.add('raisecups')
    cup2.classList.add('raisecups')
}





function secondsweep() {
    var sweep = document.getElementById('sweep');
    var secondlayer = document.getElementById('second_layer');
    sweep.classList.remove('carriagetoplacesheet')
    sweep.classList.add('firstlayersweep');
    secondlayer.classList.add('secondlayersweep');
}
setTimeout(raisepallethoist, 1000);
setTimeout(grabfirstpallet, 6000);
setTimeout(carriagetakespallet, 11000);
setTimeout(mainhoistgetpallet, 16000);
setTimeout(carriageretract, 21000);
setTimeout(mainhoistraisingpallet, 26000);
setTimeout(firstsweep, 31000);
setTimeout(hoistdowntosecondlayer, 36000)
setTimeout(conveyormovement, 36000)
setTimeout(lowersheetarms, 41000)
setTimeout(pickupsheet, 43000)
setTimeout(carriagetoplacesheet, 45000)
setTimeout(carriagesheetdroplayer1, 50000)
setTimeout(raisecupsandarms, 52000)
setTimeout(secondsweep, 55000)