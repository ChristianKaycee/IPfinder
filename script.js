document.addEventListener("DOMContentLoaded", () => {
let input = document.querySelector(".search-text");
let btn = document.querySelector(".search-btn");
let ipaddress = document.querySelector(".ip");
let location = document.querySelector(".lo");
let timezone = document.querySelector(".tz");
let isp = document.querySelector(".isp");

let api_key = "at_9Wqv0Wg2zO7eBQ8KdoRvajLQVxSrp";

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let ip = input.value;
    
    fetch(`https://geo.ipify.org/api/v1?apiKey=${api_key}&ipAddress=${ip}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Debug: log the response data
            ipaddress.innerHTML = data.ip || "No IP found";
            location.innerHTML = data.location.city || "No Location found"; // Adjust based on API response
            timezone.innerHTML = data.location.timezone || "No Timezone found";
            isp.innerHTML = data.isp || "No ISP found";
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    });
});