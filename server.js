
const express = require("express");
const connectDB = require("./config/db");
require('dotenv').config();

// const restaurentRoute = require("./routes/restaurentRoutes");

const app = express();
const PORT = 8000;

app.use(express.json());


// app.use("/api/v1/restaurent", restaurentRoute);

// app.use(errorMiddleware);

app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`Server is running on port ${PORT}`);
    } catch (err) {
        console.log("Server failed to start", err);
    }
});
