
import { Student } from "../model/student.js";

// Get all students
const getAllStudents = async (req, res) => {
    try {
        // if (req.employee) {
          const findStudents = await Student.find({ isDeleted: false })
          
    
          if (!findStudents) {
            
            return res.status(404).json({ message:'No students found' });

          }
          if (findStudents.length == 0) {
            return res.status(404).json({ message:'No students found' });


          }
    return res.status(200).json({ message:'Students data fetched',findStudents });

        // } 
        // else {
        //     return res.status(401).json({ message:'Token not authorized' });

        // }
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message:'Internal server error',  error  });
      }
};

// Add a new student
const addStudent = async (req, res) => {
  try {
    const { name, college, dsaScore, webDScore, reactScore, status, batch } = req.body;
    if (!name || !college || !status || !batch) {
      return res.status(400).json({ message: 'Name, college, status, and batch are required fields' });
    }
    const newStudent = new Student({
      name,
      college,
      status,
      batch,
      scores: { dsaScore, webDScore, reactScore } 
    });
    await newStudent.save();
    res.status(201).json({ message: 'Student added successfully', data: newStudent });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error', error });
  }
};




export { getAllStudents, addStudent };
