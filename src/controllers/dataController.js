const path = require('path');
const fs = require('fs').promises;

const dataFilePath = path.join(__dirname, '../../data/dummyData.json');

exports.getData = async (req, res) => {
    try {
        const data = await fs.readFile(dataFilePath, 'utf8');
        let jsonData = JSON.parse(data);

        const { sort, order, filter } = req.query;

        
        const allowedParams = ['sort', 'order', 'filter'];
        const unexpectedParams = Object.keys(req.query).filter(param => !allowedParams.includes(param));
        if (unexpectedParams.length > 0) {
            return res.status(400).json({ error: `Unexpected query parameter(s): ${unexpectedParams.join(', ')}` });
        }

        
        if (sort && !['id', 'name', 'language', 'bio', 'version'].includes(sort)) {
            return res.status(400).json({ error: 'Invalid sort parameter' });
        }

        
        if (order && !['asc', 'desc'].includes(order)) {
            return res.status(400).json({ error: 'Invalid order parameter' });
        }

        
        if (filter) {
            try {
                const filters = JSON.parse(filter);
                jsonData = jsonData.filter(item => {
                    return Object.entries(filters).every(([key, value]) => {
                        return item[key].toString().toLowerCase().includes(value.toLowerCase());
                    });
                });
            } catch (error) {
                return res.status(400).json({ error: 'Invalid filter parameter' });
            }
        }

       
        if (sort) {
            const sortOrder = order === 'desc' ? -1 : 1;
            jsonData.sort((a, b) => {
                if (a[sort] < b[sort]) return -1 * sortOrder;
                if (a[sort] > b[sort]) return 1 * sortOrder;
                return 0;
            });
        }

        res.json(jsonData);

    } catch (error) {
        console.error('Error in the data Controller:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
