import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { ConnectOptions } from 'mongoose';
import projectRoutes from './routes/projectRoutes';


const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());
app.use('/api/projects', projectRoutes);


mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions).then(() => {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
