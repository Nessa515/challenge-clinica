import express from 'express';
const app = express();
import {router} from './routes/tutors'


// middleware
app.use(express.json());

// Route
app.use('/', router)


// Porta
const port = process.env.PORT || 3000

const start = async () => {
    try {
        app.listen(port, () => console.log(`Server is listening port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}


start()
