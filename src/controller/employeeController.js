import { comparePassword, hashPassword, jwtTokenGenerator } from "../common/commonService.js";
import { Employee } from "../model/employee.js";


//register api
const employeeRegister  = async (req, res) => {
    try {
      let { name, email, password, phoneNumber } = req.body;
  
      if (!name || !email || !password || !phoneNumber ) {
        return res.status(400).json({ message: 'All fields are required' });
    }
  
      const findEmployee = await Employee.findOne({ email });
      const isNumber = await Employee.findOne({ phoneNumber });
  
      if (findEmployee) {
     
        return res.status(400).json({ message: 'Email already registered' });
 
      }
      if (isNumber) {
      
        return res.status(400).json({ message: 'Mobile' });
 
      }
      password = await hashPassword(password);
      let newEmployee = new Employee({
        name,
        email,
        password,
        phoneNumber,
      });
      await newEmployee.save();
    
     return res.status(201).json({ message: 'Employee registered successfully', employee: newEmployee });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message:'Internal server error',  error  });
    }
  };


  const employeeLogin = async (req, res) => {
    try {
      let { email, password } = req.body;

      if (!email || !password ) {
        return res.status(400).json({ message: 'All fields are required' });
    }
  
      const findEmployee = await Employee.findOne({
        email: email,
        isDeleted: false,
      })
  
      if (!findEmployee) {
        return res.status(400).json({ message: 'Employee not found' });

      }
      const isPasswordMatch = await comparePassword(
        password,
        findEmployee.password
      );
  
      if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Incorrect credientials' });

      }
      let payload = {
        employee: { id: findEmployee._id },
      };
      let token = await jwtTokenGenerator(payload, process.env.JWT_SECRET_KEY);
     
      return res.status(200).json({ message:'Employee logged in',  data: findEmployee, token  });
} catch (error) {
  console.log(error)
  return res.status(500).json({ message:'Internal server error',  error  });
}
  };


  export { employeeRegister ,employeeLogin}