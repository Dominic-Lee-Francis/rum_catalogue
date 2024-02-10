// only works if package.json has "type": "module"
const express = require('express');
const userRoutes = require('./src/users/routes');

const bcrypt = require('bcrypt');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/v1/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});