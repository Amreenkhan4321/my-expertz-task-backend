import { Interview } from '../model/interview.js';
import { Result } from '../model/result.js';


const resultStatus = async (req, res) => {
    try {
        const interview = await Interview.findById(req.params.interviewId);
        if (!interview) {
            return res.status(404).json({ message: 'Interview not found' });
        }
        const { studentId } = req.params;
        const { result } = req.body;
        const studentIndex = interview.students.findIndex(student => student._id === studentId);
        if (studentIndex === -1) {
            return res.status(404).json({ message: 'Student not found in interview' });
        }
        interview.students[studentIndex].result = result;
        await interview.save();
        res.json({ message: 'Result status updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


// Get result status for a student in an interview
const getResultStatusList = async (req, res) => {
    try {
      const { interviewId, studentId } = req.body;

      // Find the result document for the specified interview and student
      const resultDoc = await Result.find({ interview: interviewId, student: studentId });
  console.log(resultDoc)
      // If result document doesn't exist, send an empty response
    //   if (!resultDoc) {
    //     return res.json({});
    //   }

    //   res.send(resultDoc)
  
    //   res.json({ result: resultDoc.result });
    } catch (error) {
      console.error('Error fetching result status:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

export { resultStatus,getResultStatusList };
