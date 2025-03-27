// Function to fetch data from API and display name and email
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(response => response.json()) // Parse JSON response
        .then(data => {
            const container = document.getElementById('data-container'); // Get container element
            data.forEach(item => {
                const div = document.createElement('div');
                div.innerHTML = `<p><strong>Name:</strong> ${item.name}</p>
                                 <p><strong>Email:</strong> ${item.email}</p>
                                 <hr>`;
                container.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Call fetchData function when the page loads
window.onload = fetchData;
