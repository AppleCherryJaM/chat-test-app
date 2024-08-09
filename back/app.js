require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/user-routes");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*" }));

app.use("/api", userRouter);

// app.use((error, req, res, next) => {
// 	if (res.headerSent) {
// 		return next(error);
// 	}
// 	res.status(error.code || 500)
// 	res.json({ message: error.message || "Unknown error" })
// });

const start = async() => {
	try {
		await mongoose.connect(process.env.DB_URL);
		app.listen(PORT, () => {
			console.log('Server started')
		});
	} catch (error) {
		console.log(error);
	}
}

start();