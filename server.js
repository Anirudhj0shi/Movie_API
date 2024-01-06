import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'express';
import movieRoutes from './routes/movie.js'


const app = express()


//crating config for dotenv
config({
    path:'.env',
});

app.use(bodyParser.json());

app.get('/', (req, res) => { 
    res.send('Welcome to Movie API');
    console.log();
  });


// app.use('/data',moviesR)
app.use('/api',movieRoutes)

//mongo db is connected
mongoose.connect(process.env.MONGO_URL,{
    dbName:"MOVIE_API"
}).then(()=>console.log("MongoDB is Connected...!"));



const port = process.env.PORT;
app.listen(port,()=>console.log(`Server is running on port ${port}`));