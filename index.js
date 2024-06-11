import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import route from './routes/userRoute.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB Connected");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

app.use("/api", route);

app.use((err, req, res, next) => {
  const { status = 400, message = "Something went wrong" } = err;
  res.status(status).json({ message });
  next(err);
});

export default app;
