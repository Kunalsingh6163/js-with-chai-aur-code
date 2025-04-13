// Pure function
function add(a, b) {
  return a + b;
}

// When the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  const addBtn = document.getElementById('addBtn');

  addBtn.addEventListener('click', function () {
    const a = parseFloat(document.getElementById('numA').value);
    const b = parseFloat(document.getElementById('numB').value);

    if (!isNaN(a) && !isNaN(b)) {
      const result = add(a, b);
      document.getElementById('result').textContent = `Result: ${result}`;
    } else {
      document.getElementById('result').textContent = `Please enter valid numbers.`;
    }
  });
});
