// Initialize server
// import app from './app';
const app = require('./app');
// pick a port
const port = process.env.PORT || 8080;

// START SERVER
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});