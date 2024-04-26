import { Interview } from "../model/interview.js";
import { Student } from "../model/student.js";

// Add a new interview
const addInterview = async (req, res) => {
  try {
    const { company, date } = req.body;
    if (!company || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newInterview = new Interview({ company, date });
    await newInterview.save();
    res.status(201).json({
      success: true,
      message: "Interview added successfully",
      data: newInterview,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Get all interviews
const getAllInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find().populate(
      "students",
      "name college status"
    );
    if (!interviews || interviews.length === 0) {
      return res
        .status(DATA_NOT_FOUND)
        .json({ success: false, message: "Interviews not found" });
    }
    res.status(200).json({ success: true, data: interviews });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const allocateStudent = async (req, res) => {
  try {
    const { studentId, interviewId } = req.body;
    const interview = await Interview.findById(interviewId);
    if (!interview) {
      return res.status(404).json({ message: "Interview not found" });
    }

    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    interview.students.push(student);
    await interview.save();

    res.json({ message: "Student allocated to interview successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error", error });
  }
};

// Get students for a specific interview
const getInterviewStudents = async (req, res) => {
    try {
      const { interviewId } = req.body;
  
      const interview = await Interview.findById(interviewId).populate('students', 'name college status');
      if (!interview) {
        return res.status(404).json({ message: 'Interview not found' });
      }
  
      res.json({ data: interview.students });
    } catch (error) {
        res
        .status(500)
        .json({ success: false, message: "Internal Server Error", error });
   
    }
  };

export { getAllInterviews, addInterview, allocateStudent ,getInterviewStudents};
