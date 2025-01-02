function tick() {
    console.log(new Date().toLocaleTimeString()); 
}

setInterval(tick, 3000); // Display time every second (1000 milliseconds)