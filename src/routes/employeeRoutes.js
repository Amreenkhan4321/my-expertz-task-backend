import Router from 'express'
import { employeeLogin, employeeRegister } from '../controller/employeeController.js';
  const employeeRoutes = Router();
  
  employeeRoutes.post("/login",employeeLogin)
  employeeRoutes.post("/register",employeeRegister)
  
  export { employeeRoutes };
  