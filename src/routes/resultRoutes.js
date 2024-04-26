import Router from 'express'
import { getResultStatusList, resultStatus } from '../controller/resultController.js';
  const resultRoutes = Router();
  
  resultRoutes.post("/:interviewId/students/:studentId",resultStatus)
  resultRoutes.post("/getResultStatusList",getResultStatusList)
  
  
  
  export { resultRoutes };

  
  
  


 


