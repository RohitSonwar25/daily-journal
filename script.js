document.addEventListener('DOMContentLoaded', () => {
    const journalEntry = document.getElementById('journalEntry');
    const saveButton = document.getElementById('saveButton');
    const entriesContainer = document.getElementById('entriesContainer');

    // Load existing entries from local storage
    loadEntries();

    saveButton.addEventListener('click', () => {
        const entryText = journalEntry.value.trim();
        if (entryText) {
            saveEntry(entryText);
            journalEntry.value = ''; // Clear the textarea
        }
    });

    function saveEntry(entry) {
        const entries = getEntries();
        entries.push(entry);
        localStorage.setItem('journalEntries', JSON.stringify(entries));
        displayEntries(entries);
    }

    function loadEntries() {
        const entries = getEntries();
        displayEntries(entries);
    }

    function getEntries() {
        const entries = localStorage.getItem('journalEntries');
        return entries ? JSON.parse(entries) : [];
    }

    function displayEntries(entries) {
        entriesContainer.innerHTML = '';
        entries.forEach(entry => {
            const entryDiv = document.createElement('div');
            entryDiv.classList.add('entry');
            entryDiv.textContent = entry;
            entriesContainer.appendChild(entryDiv);
        });
    }
});