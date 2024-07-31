const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

const dataDir = path.join(__dirname, '../../data');
const dataFilePath = path.join(dataDir, 'dummyData.json');
const dataUrl = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json';

async function fetchData() {
    try {
        await fs.mkdir(dataDir, { recursive: true });

        const response = await axios.get(dataUrl);
        await fs.writeFile(dataFilePath, JSON.stringify(response.data, null, 2));
        console.log('Data fetched and saved successfully');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function initializeData() {
    try {
        await fs.access(dataFilePath);
        console.log('Data file already exists');
    } catch (error) {
        console.log('Data file not found, fetching data...');
        await fetchData();
    }
}

module.exports = { initializeData };
