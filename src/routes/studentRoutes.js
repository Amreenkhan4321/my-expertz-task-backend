import Router from 'express'
import { addStudent, getAllStudents } from '../controller/studentController.js';
  const studentRoutes = Router();
  
 studentRoutes.get("/getStudents",getAllStudents)
 studentRoutes.post("/add",addStudent)
  
  export { studentRoutes };

  
  
  


 


