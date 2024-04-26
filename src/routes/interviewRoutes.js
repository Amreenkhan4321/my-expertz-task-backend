import Router from 'express'
import { addInterview, allocateStudent, getAllInterviews, getInterviewStudents } from '../controller/interviewController.js';
  const interviewRoutes = Router();
  
  interviewRoutes.get("/getlist",getAllInterviews)
  interviewRoutes.post("/add",addInterview)
  interviewRoutes.post("/allocateStudent",allocateStudent)
  interviewRoutes.post("/getInterviewStudents",getInterviewStudents)
  
  
  export { interviewRoutes };

  
  
  


 


