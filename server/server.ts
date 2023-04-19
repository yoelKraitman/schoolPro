import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 4001;
const mongoDB_URI = process.env.mongoDB_URI;
 // how we work with that (.env)
app.use(express.static('public/build'))
app.use(express.json());
 
import user from "./routes/user";
app.use("/user" , user );

mongoose.connect(mongoDB_URI)
    .then(res => {
        console.log("connected to Mongoose");
    })
    .catch((err) => {
        console.log("Failed to connect to Mongoose:")
        console.log(err.message);
    });
 
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
 


