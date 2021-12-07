import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js'

const app = express() // app will lay in this variable
const PORT = 5000

app.use(bodyParser.json());

app.use('/users', usersRoutes)

app.get('/', (req, res) => { // '/' = home page / route
    res.send('Hello from homepage!')
});  // First route

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
