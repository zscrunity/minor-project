const express = require('express');
const app = express();
const dbConfig = require('./db');
const roomsRoute = require('./routes/roomsRoute');
const auth = require('./routes/auth');
const property = require('./routes/propertyRoute');
const userRoute = require('./routes/user');


app.use(express.json());

app.use('/api/rooms' , roomsRoute);
app.use("/api/auth",auth);
app.use("/api/properties",property);
app.use("/api/users",userRoute);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));