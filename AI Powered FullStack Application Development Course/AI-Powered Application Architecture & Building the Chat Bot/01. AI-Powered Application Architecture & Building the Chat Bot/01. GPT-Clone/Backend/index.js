import 'dotenv/config'


import express from 'express';
import cors from 'cors';
import db from './db/db.config.js';

import mainRouter from './src/api/main.routes.js';
import { errorHandler } from './src/middleware/error-handler.js';

const app = express();


app.use(
    cors({
        origin: 'http://localhost:5173',
    }));

app.use(express.json())

app.use('/api', mainRouter);

app.use(errorHandler)

async function startServer() {
    try {
        const connection = await db.getConnection();
        connection.release();
        console.log('db connected')

        app.listen(3000, (err) => {
            if (err) {
                throw err
            }

            console.log("server is running on port http://localhost:3000")
        });
    } catch (error)
     {
        console.error('error starting server: ', error.message)
    }
}

startServer();