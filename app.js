const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('your_mongodb_connection_string', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Atmashuddhi Backend');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
