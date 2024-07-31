const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api');
const { initializeData } = require('./utils/dataFetcher');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT ;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', apiRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const mainFun = async () => {
    await initializeData();

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

mainFun();
