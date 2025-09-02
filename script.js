function createTable() {
    const table = document.getElementById('myTable');
    // Clear any existing table content
    table.innerHTML = '';

    const rowInput = prompt('Input number of rows');
    if (rowInput === null) return; // User cancelled

    const rows = parseInt(rowInput, 10);
    if (isNaN(rows) || rows <= 0) {
        if (isNaN(rows)) {
            // Ignore non-numeric
            return;
        } else {
            alert('Invalid input. Number of rows must be positive.');
            return;
        }
    }

    const colInput = prompt('Input number of columns');
    if (colInput === null) return; // User cancelled

    const cols = parseInt(colInput, 10);
    if (isNaN(cols) || cols <= 0) {
        if (isNaN(cols)) {
            // Ignore non-numeric
            return;
        } else {
            alert('Invalid input. Number of columns must be positive.');
            return;
        }
    }

    // Generate the table
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < cols; j++) {
            const cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
