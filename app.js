const express = require('express')

const app = express()
const port = 3000

// app.use((req, res, next) => {
//   console.log('In the first middleware');
//   next();
// });

// app.use((req, res, next) => {
//     console.log('In the seconde middleware');
//     res.send('<h1>Hello World</h1>')
// });

app.use('/users', (req, res, next) => {
    res.send('<h1>Your are in the "users" page</h1>')
});

app.use('/', (req, res, next) => {
    res.send('<h1>Welcome to the home page</h1>')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))