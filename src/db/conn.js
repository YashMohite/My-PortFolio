require('dotenv').config();
const mongoose = require("mongoose");

// Creating a DataBase 
mongoose.connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Connection Sucessful`);
}).catch((error) => {
    console.log(error);
});