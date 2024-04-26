import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  interview: { type: mongoose.Schema.Types.ObjectId, ref: 'Interview' },
  result: {
    type: String,
    enum: ['PASS', 'FAIL', 'On Hold', 'Didn’t Attempt']
  }
},{ timestamps: true });


const Result = mongoose.model("Result",resultSchema)
export {Result}