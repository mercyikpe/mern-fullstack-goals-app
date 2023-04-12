const express = require("express");
const router = require("./routes/goalRoutes");
const { errorHandler } = require("./mddleware/errorMiddleWare");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8081;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", router);

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Goals api is running" });
});

app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`));
