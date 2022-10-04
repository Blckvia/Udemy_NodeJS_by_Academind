const express = require('express');

const app = express();

// app.use('/', (req, res, next) => {
//     console.log('Log smth in the console');
//     next();
// });

// app.use('/users', (req, res, next) => {
//     console.log('Users page uploaded');
//     res.send('<h1>This is the users page</h1>');
// });


app.use('/users', (req, res, next) => {
    console.log('Users page uploaded');
    res.send('<h1>This is the users page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Log smth in the console');
    res.send('<h1>This is Homepage</h1>');
});

app.listen(3000);