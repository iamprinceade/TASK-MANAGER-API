const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB('mongodb+srv://m0ham3d199t:PaJuOle8MOwwfVuK@mohamed.iq9andl.mongodb.net/socialWiseDB')
        app.listen(port, console.log(`Server is listening on port ${port}...`)
        );
    } catch (error)     {
        console.log(error);
    }
}

start()

//app.listen(port, console.log(`Server is listening on port ${port}`)); 

