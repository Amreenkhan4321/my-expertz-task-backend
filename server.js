import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors'
import { dbConnection } from './src/config/dbConfig.js';
import { studentRoutes } from './src/routes/studentRoutes.js';
import { employeeRoutes } from './src/routes/employeeRoutes.js';
import { interviewRoutes } from './src/routes/interviewRoutes.js';
import { resultRoutes } from './src/routes/resultRoutes.js';
const app = express();
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


dotenv.config();

app.use("/api/employee",employeeRoutes)
app.use("/api/student", studentRoutes);
app.use("/api/interview", interviewRoutes)
app.use("/api/result",resultRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnection()
});