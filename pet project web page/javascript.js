document.getElementById('habitForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const habit = document.getElementById('habit').value;
    const mood = document.getElementById('mood').value;
    const rating = document.getElementById('rating').value;
    const date = new Date().toLocaleDateString();

    // Create new row for the table
    const tableBody = document.getElementById('tableBody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${date}</td>
        <td>${habit}</td>
        <td>${mood}</td>
        <td>${rating}</td>
    `;

    tableBody.appendChild(newRow);

    // Clear form fields
    document.getElementById('habit').value = '';
    document.getElementById('mood').value = 'happy';
    document.getElementById('rating').value = '';

    // Check mood rating for motivational prompt
    updateMotivationalPrompt(rating);
});

function updateMotivationalPrompt(rating) {
    const prompt = document.getElementById('prompt');
    if (rating <= 3) {
        prompt.textContent = "Don't give up! Keep pushing through, and it will get better!";
    } else if (rating <= 6) {
        prompt.textContent = "You're doing okay, but you can aim higher! Keep going!";
    } else {
        prompt.textContent = "You're doing great! Keep up the excellent work!";
    }
}
