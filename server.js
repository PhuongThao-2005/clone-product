const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.get('/hello', (req, res) => {
    res.send('Hello!');
});

app.post('/capitalize', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'No text provided' });
    }
    res.json({ result: text.toUpperCase() });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
