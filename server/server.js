// only works if package.json has "type": "module"
import express from 'express';

import bcrypt from 'bcrypt';

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});